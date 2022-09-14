import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useDispatch } from 'react-redux'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { authActions } from "../../store";



const schema = yup.object().shape({
  email: yup.string().required("Type of Function must be required"),
  password: yup.string().required("Type of Function must be required"),
});
function Admin() {
  
const disspatch = useDispatch();

const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  axios.defaults.withCredentials = true;

  const handleSubmit2 = (data) => {
    axios
      .post("api/login", { data })
      .then((res) => {
        const lctTok = res.data.jsonToken;
        console.log(res);
        localStorage.setItem("bandhanUserToken", lctTok);
        disspatch(authActions.login());
        navigate("/admindashboard");
      })

      .catch((err) => {
        console.log(err);
        navigate("/");
      });
    // if (data.email === "demo@gmail.com") {
    //   if (data.password === "demo") {
    //     console.log("inn");
    //     navigate("/admindashboard");
    //   } else {
    //     navigate("/admin");
    //   }
    // } else {
    //   navigate("/admin");
    // }
  };
  return (
    <div className="Auth-form-container">
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
                      Admin Panel Login
                    </h2>

                    <form
                      onSubmit={handleSubmit((data) => {
                        handleSubmit2(data);
                      })}
                    >
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

export default Admin;