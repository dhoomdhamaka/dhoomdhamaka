import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authActions } from "../../store";

const schema = yup.object().shape({
  email: yup.string().required("Email must be required"),
  password: yup.string().required("password must be required"),
});

export default function Login() {
  const [errorLogin, setErrorLogin] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const disspatch = useDispatch();

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  function handleSubmit2(data) {
    axios
      .post("api/login", { data })
      .then((res) => {
        const lctTok = res.data.jsonToken;
        console.log(res);
        localStorage.setItem("bandhanUserToken", lctTok);
        disspatch(authActions.login());
        navigate("/events");
      })

      .catch((err) => {
        if (err.response.status === 400) {
          if (err.response.data) {
            setErrorLogin("Invalid Email or Password");
          }else{
            setErrorLogin(err.response.data)
          }
        }else{
          setErrorLogin(err.response.data)
        }
        // navigate("/login");
        // if(err.sta)
      });
  }

  return (
    <div className="App">
      <section
        class="vh-100 bg-image"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
        }}
      >
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style={{ borderRadius: "15px" }}>
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5 fw-bold">
                      Login To Account
                    </h2>

                    <form
                      onSubmit={handleSubmit((data) => {
                        handleSubmit2(data);
                      })}
                    >
                      {errorLogin != null && <div class="alert alert-danger mb-5 fw-bold text-center" role="alert">
                        {errorLogin}
                      </div>}
                      <div class="form-outline border-bottom mb-4">
                        <input
                          {...register("email")}
                          name="email"
                          type="email"
                          id="form3Example3cg"
                          class="form-control form-control-lg"
                        />
                        <label
                          class="form-label fw-bold text-muted"
                          for="form3Example3cg"
                        >
                          Email
                        </label>
                      </div>
                      {errors.email && (
                        <div class="alert alert-danger mt-2" role="alert">
                          {errors.email?.message}
                        </div>
                      )}

                      <div class="form-outline border-bottom mb-4">
                        <input
                          {...register("password")}
                          name="password"
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-lg"
                        />
                        <label
                          class="form-label fw-bold text-muted"
                          for="form3Example4cg"
                        >
                          Password
                        </label>
                      </div>
                      {errors.password && (
                        <div class="alert alert-danger mt-2" role="alert">
                          {errors.password?.message}
                        </div>
                      )}
                      <div class="d-flex justify-content-center mt-5">
                        <button
                          type="submit"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 fw-bold text-body"
                        >
                          Login <i class="fa-solid fa-unlock ps-2"></i>
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">
                        Not have an account ?
                        <Link class="fw-bold text-body" to={"/register"}>
                          <u> Register here</u>
                        </Link>
                      </p>
                      <p class="text-center text-muted mt-2 mb-0">
                        Forgot Password ?
                        <Link class="fw-bold text-body" to={"/passwordReset"}>
                          <u> Reset here</u>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}