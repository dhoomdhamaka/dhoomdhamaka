import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import "./home.css";

import React, { useEffect, useState } from "react";
import Slide from "./coverFlowSwipe/slide";

export default function Home() {
  return (
    <div>
      <section className="home mb-5 pt-5" id="home">
        <div className="content">
          <h3 className=" text-black fw-bolder fs-2 text-uppercase text-center">
            It is time to celebrate -
            <h3 className="fw-bolder fs-2" style={{ color: "#1ec408" }}>
              {" "}
              "The Best Event organiser"{" "}
            </h3>
          </h3>
        </div>
        <Slide />
      </section>

      {/* <!-- home section ends --> */}

      {/* <!-- service section starts  --> */}

      <section class="service" id="service">
        <h2 class=" fw-bold text-center fs-2 mb-4" style={{ color: "#1ec408" }}>
          DHAMAKA
          <span
            className="fw-bold fs-2 ps-2"
            style={{ fontSize: "27px", color: "black" }}
          >
            SERVICES
          </span>
        </h2>

        <div class="box-container">
          <div className="row justify-content-between ms-5 me-5">
            <div className=" col-md-4">
              <div className="card shadow-8 -strong bg-dark rounded-5 ">
                <div className="card-body text-center ">
                  <div className=" text-center">
                    <div
                      className="btn btn-floating btn-lg btn-success fs-6 text-center logoBtn"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        class="fas fa-video pt-2"
                        style={{ fontSize: "25px" }}
                      ></i>
                    </div>
                  </div>
                  <h3 className="text-center fw-bold mb-3 mt-2 text-white">
                    Photography
                  </h3>
                  <p className="mb-3 text-white text-muted">
                    Capturing is must because time passes, not memories.
                  </p>
                  <Link to="./photographygallery" className="btn btn-light text-dark">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
            <div className=" col-md-4">
              <div className="card shadow-5-strong bg-dark rounded-5 ">
                <div className="card-body text-center ">
                  <div className=" text-center">
                    <div
                      className="btn btn-floating btn-lg btn-success fs-6 text-center logoBtn"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        class="fas fa-om pt-2"
                        style={{ fontSize: "25px" }}
                      ></i>
                    </div>
                  </div>
                  <h3 className="text-center fw-bold mb-3 mt-2 text-white">
                    Pooja
                  </h3>
                  <p className="mb-3 text-white text-muted">
                    Each and Every work starts with almighty’s blessings.
                  </p>
                  <Link to="./poojaGallery" className="btn btn-light text-dark">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
            <div className=" col-md-4">
              <div className="card shadow-5-strong bg-dark rounded-5 ">
                <div className="card-body text-center ">
                  <div className=" text-center">
                    <div
                      className="btn btn-floating btn-lg btn-success fs-6 text-center logoBtn"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        class="fas fa-atom pt-2"
                        style={{ fontSize: "25px" }}
                      ></i>
                    </div>
                  </div>
                  <h3 className="text-center fw-bold mb-2 mt-2 text-white">
                    decoration
                  </h3>
                  <p className="mb-1 text-white text-muted">
                    It Helps to Bright your future.
                  </p>
                  <Link
                    to="./decorationgallery"
                    className="btn btn-light text-dark mb-1 mt-3"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-container" style={{ marginBottom: "70px" }}>
          <div className="row justify-content-center ms-5 mt-4 mb-4 me-5">
            <div className=" col-md-4">
              <div className="card shadow-8 -strong bg-dark rounded-5 ">
                <div className="card-body text-center ">
                  <div className=" text-center">
                    <div
                      className="btn btn-floating btn-lg btn-success fs-6 text-center logoBtn"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        class="fas fa-palette mt-2"
                        style={{ fontSize: "25px" }}
                      ></i>
                    </div>
                  </div>
                  <h3 className="text-center fw-bold mb-3 mt-2 text-white">
                    Beauty
                  </h3>
                  <p className="mb-3 text-white text-muted">Shine Forever.</p>
                  <Link to="./beautygallery" className="btn btn-light text-dark">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
            <div className=" col-md-4">
              <div className="card shadow-5-strong bg-dark rounded-5 ">
                <div className="card-body text-center ">
                  <div className=" text-center">
                    <div
                      className="btn btn-floating btn-lg btn-success fs-6 text-center logoBtn"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        class="fas fa-utensils pt-2"
                        style={{ fontSize: "25px" }}
                      ></i>
                    </div>
                  </div>
                  <h3 className="text-center fw-bold mb-3 mt-2 text-white">
                    catering
                  </h3>
                  <p className="mb-3 text-white text-muted">
                    Food is the secret of energy.
                  </p>
                  <Link to="./cateringgallery" className="btn btn-light text-dark">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- service section ends --> */}

      {/* <!-- about section starts  --> */}

      <section
        className="about mt-2"
        style={{ marginBottom: "100px" }}
        id="about"
      >
        <h2
          class="heading fw-bold text-center fs-2 mb-4"
          style={{ color: "black" }}
        >
          ABOUT
          <span
            className="fw-bold fs-2 ps-2"
            style={{ fontSize: "27px", color: "#1ec408" }}
          >
            US
          </span>
        </h2>

        <div class="row justify-content-center mb-5">
          <div className="col-md-5">
            <div class="image hover-zoom text-center">
              <img
                className=" rounded shadow-5-strong"
                src="./images/newlogo.jpg"
                // src="https://bit.ly/3dOEBcx"
                width={"500px"}
                height={"300px"}
                alt="dhoom"
              />
            </div>
          </div>
          <div className="col-md-6 ps-0 ms-0">
            <div class="content mt-5 text-md-center">
              <h3 className=" text-black fw-bold mb-3 text-center fs-3">
                Our Best Services Just For You
              </h3>
              <p className="p-3 ms-sm-4 ms-md-2">
                Dhoom Dhamaka is an online service provider platform which makes
                your occasion grand, royal and memorable. We all run after any
                function to see how the preparations are going, instead of
                enjoying it. So, we can relate to your problem and are here to
                assist you in one click and take all your responsibility.
                Because, it's time to celebrate now!!!
              </p>
              <div className=" ms-sm-4">
                <button
                 
                  className="btn btn-black mt-4"
                >
                 <a  href="/termsandconditions"> Terms and condition</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service m-5" id="service">
        <h2
          class="heading fw-bold text-center mb-5"
          style={{ color: "#1ec408" }}
        >
          ENJOY THE
          <span
            className="fw-bold fs-2 text-black ps-3"
            style={{ fontSize: "27px" }}
          >
            DHAMAKA SAFELY
          </span>
        </h2>

        <div className="row justify-content-between ms-2 me-2">
          <div className="col-md-3">
            <div className="card bg-black shadow-5-strong rounded-4">
              <div className="card-body mb-2">
                <div className=" text-center">
                  <div
                    className="btn btn-floating btn-lg btn-success fs-6 text-center logoBtn"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i
                      class="fas fa-briefcase-medical pt-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </div>
                  <h3 className="text-center fw-bold mb-4 mt-2 text-white">
                    Protective Gears
                  </h3>
                  <p className="mb-3 text-white text-muted">
                    Regular use of masks, gloves and sanitizers is ensured by
                    professionals during working hours. The team of Dhoom
                    Dhamaka is asking for proof by cross checking the
                    temperature.All safety measures are being taken care of
                    during the event.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-black shadow-5-strong rounded-4">
              <div className="card-body mb-3">
                <div className=" text-center">
                  <div
                    className="btn btn-floating btn-lg btn-success fs-6 text-center logoBtn mb-2 mt-2"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i
                      class="fas  fa-hand-holding-medical pt-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </div>
                  <h3 className="text-center fw-bold mb-4 mt-2 text-white">
                    Staff Screening
                  </h3>
                  <p className="mb-3 text-white text-muted">
                    Temperature checks are done daily for the entire team.
                    Temperature readings are confirmed by Dhoom Dhamaka security
                    staff. We are allowing professionals to work on the spot
                    only after the proof is verified.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-black shadow-5-strong rounded-4">
              <div className="card-body mb-3">
                <div className=" text-center">
                  <div
                    className="btn btn-floating btn-lg btn-success mb-2 fs-6 text-center logoBtn"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i
                      class="fas fa-heart pt-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </div>
                  <h3 className="text-center fw-bold mb-3 mt-2 text-white">
                    Arogya Setu App Check
                  </h3>
                  <p className="mb-4 text-white text-muted">
                    Each professional uses the app and undergoes self-assessment
                    tests on a regular basis. The Dhoom Dhamaka team ensures to
                    check it from time to time through image processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3" >
            <div className="card bg-black shadow-5-strong rounded-4">
              <div className="card-body" style={{minHeight:"31vh"}}>
                <div className=" text-center">
                  <div
                    className="btn btn-floating btn-lg btn-success fs-6 text-center logoBtn"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i
                      class="fas fa-shield-virus pt-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </div>
                  <h3 className="text-center fw-bold mb-3 mt-2 text-white">
                    Sanitization Services
                  </h3>
                  <p className="mb-1 text-white text-muted">
                    Venues, beauty salons and studios are taking several
                    initiatives to disinfect their surfaces frequently. WHO
                    guidelines for safety reference have also been shared with
                    professionals by the Dhoom Dhamaka team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--saftey section ends--> */}

      {/* <!-- contact section starts  --> */}

      <section className="contact m-5">
        <h2
          class="heading fw-bold text-center fs-2 mb-5"
          style={{ color: "black" }}
        >
          BOOKING
          <span
            className="fw-bold fs-2 ps-2"
            style={{ fontSize: "27px", color: "#1ec408" }}
          >
            INFO
          </span>
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-3 me-2 mt-5">
            <div className="card bg-black mt-2 shadow-5-strong rounded-4">
              <div className="card-body mb-1">
                <div className=" text-center mt-3">
                  <div
                    className="btn btn-floating btn-lg btn-success fs-6 text-center logoBtn mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i
                      class="fas fa-check pt-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </div>
                  <h4 className="text-center fw-bold mb-3 mt-2 text-white">
                    Event Booking -{" "}
                    <span style={{ color: "#31e319" }}> [GENERAL]</span>
                  </h4>

                  <ul className="mb-4">
                    <li
                      className=" text-muted  text-center"
                      style={{
                        listStyle: "none",
                        // marginLeft: "27px",
                        fontSize: "14px",
                      }}
                    >
                      <p className="mb-1">Birthday: 10 days or Prior</p>
                      <p className="mb-1">Engagement: 10 days or Prior</p>
                      <p className="mb-1">Pre wedding : 12 days or Prior</p>
                      <p className="mb-1">Post wedding:12 days or Prior </p>
                      {/* <p className="mb-1">Wedding: 15 days or Prior</p> */}
                      <p className="mb-1">
                        Destination Event : 20 days or Prior
                      </p>
                      <p className="mb-1"> Wedding: 20 days or Prior</p>
                      <p> Baby shower: 10 days or Prior</p>
                      <p> Corporate: 10 days or Prior</p>
                      <p> Family Function: 10 days or Prior</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 me-2">
            <div
              className="card shadow-5-strong rounded-4"
              style={{ backgroundColor: "#0e0f0d" }}
            >
              <div className="card-body mb-1">
                <div className=" text-center mt-3">
                  <div
                    className="btn btn-floating btn-lg btn-warning fs-6 text-center logoBtn mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i
                      class="fas fa-crown pt-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </div>
                  <h4 className="text-center fw-bold mb-3 mt-2 text-white">
                    Event Booking -{" "}
                    <span style={{ color: "#31e319" }}> [PREMIUM]</span>
                  </h4>

                  <ul className="mb-3">
                    <li
                      className=" text-muted text-center"
                      style={{
                        listStyle: "none",
                        // marginLeft: "27px",
                        fontSize: "14px",
                      }}
                    >
                      <p>Birthday: 5 days or Prior</p>
                      <p>Engagement: 5 days or Prior</p>
                      <p>Pre wedding : 5 days or Prior</p>
                      <p>Post wedding:5 days or Prior </p>
                      <p>Wedding: 7 days or Prior</p>
                      <p>Destination Event : 10 days or Prior</p>
                      {/* <p> Wedding: 10 days or Prior</p> */}
                      <p> Baby shower: 5 days or Prior</p>
                      <p> Corporate: 5 days or Prior</p>
                      <p> Family Function: 5 days or Prior</p>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 me-2 mt-5">
            <div className="card mt-2 bg-black shadow-5-strong rounded-4">
              <div className="card-body">
                <div className=" text-center mt-lg-2 mt-md-3 mt-md-3">
                  <div
                    className="btn btn-floating btn-lg btn-success fs-6 text-center logoBtn mb-2"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i
                      class="fas fa-bullhorn pt-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </div>
                  <h4 className="text-center fw-bold mb-2 mt-2 text-white">
                    DHAMAKA -{" "}
                    <span style={{ color: "#31e319" }}> [SPECIAL SERVICE]</span>
                  </h4>
                  <h4 className="text-center fw-bold mb-2 mt-2 text-white">
                    EMERGENCY SERVICE{" "}
                    <p style={{ color: "#31e319", fontSize: "15px" }}>
                      {" "}
                      [ 24 - 48 Hours ]
                    </p>
                  </h4>
                  <p className=" text-muted">
                    If any additionl service required before the event start.
                  </p>

                  <h4 className="text-center fw-bold mb-3 mt-1 text-white">
                    SPOT SERVICE -
                    <span style={{ color: "#31e319" }}> AT THE MOMENT</span>
                  </h4>
                  <p className=" text-muted">
                    If any additionl service required during the event.
                  </p>
                  <div className="">
                    <Link
                      to="/emergencyform"
                      type="button"
                      className="btn btn-sm emgBtn mb-2 mt-3"
                      // style={{"backgroundColor":"#31e319"}}
                    >
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- contact section ends --> */}
    </div>
  );
}
