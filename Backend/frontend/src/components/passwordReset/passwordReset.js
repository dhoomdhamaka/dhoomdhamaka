import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PasswordReset() {
  const [email, setEmail] = useState();
  const [showRes, setShowRes] = useState(false);
  const [errorLogin, setErrorLogin] = useState(null);
  const navigate = useNavigate();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowRes(true);

    axios
      .post("api/passwordReset", { email })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          navigate("/passwordresetsuccess");
          setShowRes(false);
        }
      })
      .catch((err) => {
        if (err.response.data.error === "user doesn't exists with that email") {
          setErrorLogin("User doesn't exists with this email");
        } else {
          setErrorLogin("Something went wrong. please try again later");
        }
        console.log(err);
      });
  }

  return (
    <div class="container" style={{ minHeight: "70vh" }}>
      <div class="row justify-content-center mt-4 mb-5 pt-4 pb-4">
        <div class="col-md-6 col-md-6">
          <div className="card shadow-5-strong border-5">
            <div className="card-body text-center">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div class="panel panel-default my-4">
                    <div class="panel-body">
                      <div class="text-center">
                        <h3>
                          <i class="fa fa-lock fa-4x"></i>
                        </h3>
                        <h2 class="text-center my-3">Forgot Password?</h2>
                        <p className="mb-3">
                          You can reset your password here.
                        </p>
                        <div class="panel-body">
                          <form
                            id="register-form"
                            role="form"
                            onSubmit={handleSubmit}
                            class="form"
                            method="post"
                          >
                            <div class="form-group">
                              {errorLogin != null && (
                                <div
                                  class="alert alert-danger mb-4 fw-bold text-center"
                                  role="alert"
                                >
                                  {errorLogin}
                                </div>
                              )}
                              <div class="input-group">
                                <span class="input-group-addon">
                                  <i class="glyphicon glyphicon-envelope color-blue"></i>
                                </span>
                                <input
                                  id="email"
                                  name="email"
                                  placeholder="email address"
                                  class="form-control"
                                  type="email"
                                  onChange={handleEmail}
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <input
                                name="recover-submit"
                                class="btn btn-lg btn-primary btn-block"
                                value="Reset Password"
                                type="submit"
                                disabled={showRes}
                              />
                            </div>

                            {/* <input
                              type="hidden"
                              class="hide"
                              name="token"
                              id="token"
                              value=""
                            /> */}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
