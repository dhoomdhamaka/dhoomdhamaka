import axios from "axios";
import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password must be atleast 8 characters")
    .required("password must be required"),
  resetPass: yup
    .string()
    .min(8, "Password must be atleast 8 characters")
    .oneOf([yup.ref("password"), null], "Does not match with Password")
    .required("password must be required"),
});

function NewPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const { resetTok } = useParams();

  function handleSubmit2(data) {
    axios
      .post("/api/newPassword", { data, token: resetTok })
      .then((res) => {
        if (res.status === 200) {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="row justify-content-center mt-5 mb-5">
      <div className="col-md-4 mt-3 mb-3">
        <div class="card rounded-5">
          <div class="card-body">
            <h3 class="card-title text-center fw-bold mb-4">Reset Password</h3>

            {/* <!--Password must contain one lowercase letter, one number, and be at least 7 characters long.--> */}

            <div class="card-text">
              <form
                onSubmit={handleSubmit((data) => {
                  handleSubmit2(data);
                })}
              >
                <div class="form-group mb-3">
                  <label for="exampleInputEmail12" className="fw-bold">
                    New Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    class="form-control"
                    id="exampleInputEmail12"
                    aria-describedby="emailHelp"
                    placeholder="New Password"
                  />
                </div>
                <div class="form-group mb-4">
                  <label for="exampleInputEmail1" className="fw-bold">
                    Confirm Password
                  </label>
                  <input
                    {...register("resetPass")}
                    type="password"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Repeat Password"
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-primary btn-block submit-btn"
                >
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
