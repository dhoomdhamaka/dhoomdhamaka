import React, { useReducer, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

// const dispatch = useDispatch();
const schema = yup.object().shape({
  email: yup.string().required("Email must be required"),
  username: yup.string().required("Username must be required"),
  date: yup.date().required("Date must be required"),
  previousorderId: yup.string().required("Id must be required"),
  nameoftheservice: yup.string().required("service must be required"),
  phone: yup
    .string()
    .required("Phone Number must be required")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
});

export default function Emergency() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  //   axios.defaults.withCredentials = true;

  function handleSubmit2(data) {
    axios
      .post("api/emergencyform", { data })
      .then((res) => {
        toast.success("Successfully saved", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })

      .catch((err) => {
        console.log(err);
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
                    Emergency Registration
                  </h2>
                  <form
                    onSubmit={handleSubmit((data) => {
                      handleSubmit2(data);
                    })}
                  >
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
                        Name of the Customer
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
                        Phone Number
                      </label>
                    </div>
                    {errors.phone && (
                      <div class="alert alert-danger mt-2" role="alert">
                        {errors.phone?.message}
                      </div>
                    )}

                    <div class="form-outline border-bottom mb-4">
                      <input
                        {...register("date")}
                        name="date"
                        type="date"
                        id="form3Example4cg"
                        class="form-control form-control-lg"
                      />
                      <label
                        class="form-label fw-bold text-muted"
                        for="form3Example4cg"
                      >
                        Date
                      </label>
                    </div>
                    {errors.date && (
                      <div class="alert alert-danger mt-2" role="alert">
                        {errors.date?.message}
                      </div>
                    )}

                    <div class="form-outline border-bottom mb-4">
                      <input
                        {...register("previousorderId")}
                        name="previousorderId"
                        type="text"
                        id="form3Example5cdg"
                        class="form-control form-control-lg"
                      />
                      <label
                        class="form-label fw-bold text-muted"
                        for="form3Example5cdg"
                      >
                        Previous Order Id
                      </label>
                    </div>
                    {errors.previousorderId && (
                      <div class="alert alert-danger mt-2" role="alert">
                        {errors.previousorderId?.message}
                      </div>
                    )}
                    <div class="form-outline border-bottom mb-4">
                      <input
                        {...register("nameoftheservice")}
                        name="nameoftheservice"
                        type="text"
                        id="form3Example4cdgh"
                        class="form-control form-control-lg"
                      />
                      <label
                        class="form-label fw-bold text-muted"
                        for="form3Example4cdgh"
                      >
                        Name of the Service
                      </label>
                    </div>
                    {errors.nameoftheservice && (
                      <div class="alert alert-danger mt-2" role="alert">
                        {errors.nameoftheservice?.message}
                      </div>
                    )}

                    <div class="d-flex justify-content-center mt-5">
                      <button
                        type="submit"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 fw-bold text-body text-black"
                      >
                        Submit
                        <i class="fa-solid fa-arrow-right-to-bracket ps-2"></i>
                      </button>
                    </div>
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
