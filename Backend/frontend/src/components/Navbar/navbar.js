import React, { useState } from "react";
import { Link } from "react-router-dom";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authActions } from "../../store";
import './navbar.css'
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  const handleLogout = () => {
    axios
      .get("api/logout/user", null)
      .then((res) => {
        console.log(res);
        localStorage.clear("bandhanUserToken");
        dispatch(authActions.logout());
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        localStorage.clear("bandhanUserToken");
        dispatch(authActions.logout());
        navigate("/login");
      });
  };
  return (
    <nav className=" navbar fixed-top  navbar-expand-lg mb-0 navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand  ms-5 text-white " href="#">
          <img src="./images/newlogo.jpg" className="rounded-circle z-depth-2" style={{ width: "50px"}} />
          <span
            className=" fs-4 fw-bold text-black "
            style={{ fontVariant: "small-caps" }}
          >
            Dhoom Dhamaka
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNavDropdown"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav d-flex align-items-center me-5">
            <li className="nav-item mb-sm-2 nvbrBtn ">
              <Link
                to="/"
                type="button"
                className=" nvbrBtn   me-4"
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li class="nav-item mb-sm-2">
              <Link
                to="/events"
                type="button"
                class=" nvbrBtn   me-4"
              >
                Events
              </Link>
            </li>
            <li class="nav-item mb-sm-2">
              <Link
                to="/becomevendor"
                type="button"
                class=" nvbrBtn   me-4"
              >
                Become a Vendor
              </Link>
            </li>

            {/* <li className="nav-item mb-sm-2">
            <a
              to="/"
              type="button"
              className="btn btn-warning btn-rounded me-1 fw-bold"
            >
              <NavLink to="/" className="text-white">
                Register
              </NavLink>
            </a>
          </li> */}
           
            {!isLoggedIn && (
              <li class="nav-item mb-sm-2">
                <Link
                  to="/login"
                  type="button"
                  class="   nvbrBtn  me-4"
                >
                  LOGIN
                  {/* <LoginIcon className="ps-1" /> */}
                </Link>
              </li>
            )}
             {!isLoggedIn && (
              <li className="nav-item mb-sm-2">
                <Link
                  to="/register"
                  type="button"
                  className="btn btn-primary  me-4"
                >
                  SIGN UP
                </Link>
              </li>
            )}
            {!!isLoggedIn && (
              <li class="nav-item mb-sm-2">
                <Link 
                  to="/myacc"
                  type="button"
                  class=" me-2   me-4 nvbrBtn"
                >
                  My profile
                </Link>
              </li>
            )}
            {!!isLoggedIn && (
              <li class="nav-item mb-sm-2">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="  me-4 btn-danger btn-sm btn"
                >
                  LOGOUT
                  {/* <LogoutIcon className="ps-1" /> */}
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
