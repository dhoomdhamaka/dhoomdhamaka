import React, { useReducer, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./register.css";

function LoginReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    default:
      return state;
  }
}

const schema = yup.object().shape({
  username: yup.string().required("Username must be required"),
  email: yup.string().required("Email must be required"),
  phone: yup
    .string()
    .required("Phone Number must be required")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  password: yup
    .string()
    .min(8, "Password must be atleast 8 characters")
    .required("password must be required"),
  repeatPass: yup
    .string()
    .min(8, "Password must be atleast 8 characters")
    .oneOf([yup.ref("password"), null], "Does not match with Password")
    .required("password must be required"),
});

// export default function (props) {
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [errorReg, setErrorReg] = useState(null);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  function handleSubmit2(data) {
    axios
      .post("api/register", { data })
      .then((res) => {
        if (res.status === 200) {
          navigate("/login");
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          if (err.response.data === "User already registered...") {
            setErrorReg("Email Id is already in use");
          } else if (err.response.data === "Phone no already in use...") {
            setErrorReg("Phone number already in use");
          } else {
            setErrorReg(err.response.data);
          }
        } else {
          setErrorReg(err.response.data);
        }
      });
  }

  return (
    <div className="">
      <section
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
        }}
      >
        <div className="gradient-custom-3">
          <div className=" row justify-content-center">
            <div className=" col-12 col-md-7 col-lg-5 col-xl-5 pt-5 pb-5">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5 fw-bold">
                    Create an account
                  </h2>
                  <form
                    onSubmit={handleSubmit((data) => {
                      handleSubmit2(data);
                    })}
                  >
                    {errorReg != null && (
                      <div
                        class="alert alert-danger mb-5 fw-bold text-center"
                        role="alert"
                      >
                        {errorReg}
                      </div>
                    )}
                    <div class="form-outline border-bottom  mb-4">
                      <input
                        {...register("username")}
                        name="username"
                        type="text"
                        id="form3Example1cg"
                        class="form-control form-control-lg"
                      />
                      <label
                        class="form-label fw-bold text-muted"
                        for="form3Example1cg"
                      >
                        Username
                      </label>
                    </div>
                    {errors.username && (
                      <div class="alert alert-danger mt-2" role="alert">
                        {errors.username?.message}
                      </div>
                    )}

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
                        {...register("phone")}
                        name="phone"
                        type="number"
                        id="form3Example345cg"
                        class="form-control form-control-lg"
                      />
                      <label
                        class="form-label fw-bold text-muted"
                        for="form345Example3cg"
                      >
                        Number
                      </label>
                    </div>
                    {errors.phone && (
                      <div class="alert alert-danger mt-2" role="alert">
                        {errors.phone?.message}
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

                    <div class="form-outline border-bottom mb-4">
                      <input
                        {...register("repeatPass")}
                        name="repeatPass"
                        type="password"
                        id="form3Example4cdg"
                        class="form-control form-control-lg"
                      />
                      <label
                        class="form-label fw-bold text-muted"
                        for="form3Example4cdg"
                      >
                        Confirm password
                      </label>
                    </div>
                    {errors.repeatPass && (
                      <div class="alert alert-danger mt-2" role="alert">
                        {errors.repeatPass?.message}
                      </div>
                    )}

                    {/* <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label class="form-check-label" for="form2Example3g">
                        I agree all statements in{" "}
                        <a href="#!" class="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div> */}

                    <div class="d-flex justify-content-center mt-5">
                      <button
                        type="submit"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 fw-bold text-body text-black"
                      >
                        Register
                        <i class="fa-solid fa-arrow-right-to-bracket ps-2"></i>
                      </button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account ?{" "}
                      <Link class="fw-bold text-body" to={"/login"}>
                        <u>Login here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
