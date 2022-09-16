import axios from "axios";
import React, { useEffect, useState } from "react";
import { authActions } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Todo from "../todo";
import Payment from "../payment/payment";
import Points from "./../pointsandvouchers";
import Invoice from "../Invoice/invoice";
import "./account.css";
import EventInfo from "../EventsPages/eventInfo/eventInfo";
export default function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [displayEve, setDisplayEve] = useState(false);
  const [eveDisp, setEveDisp] = useState(false);

  useEffect(() => {
    function doLogout() {
      localStorage.clear("bandhanUserToken");
      dispatch(authActions.logout());
      navigate("/login");
      console.log("Succesfully logged out");
    }

    if (!!localStorage.getItem("bandhanUserToken")) {
      axios
        .get("api/login/getLoginStatus")
        .then((res) => {
          if (res.status === 200) {
            console.log("soop...");
            setDisplayEve(true);
          } else {
            doLogout();
          }
        })
        .catch((err) => {
          doLogout();
        });
    }

    const pixy = window.matchMedia("(max-width: 800px)");
    if (pixy.matches) {
      setEveDisp(true);
      console.log("under 700 px");
    }

    pixy.addEventListener("change", (event) => {
      if (event.matches) {
        setEveDisp(true);
        console.log("under 700 px");
      }
    });
  }, []);
  return (
    <div className=" row vh-100">
      {!eveDisp && (
        <div>
          {/* <!-- Tabs navs --> */}
          <ul class="nav nav-pills nav-fill mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                id="ex2-tab-3"
                data-mdb-toggle="tab"
                href="#ex2-tabs-3"
                role="tab"
                aria-controls="ex2-tabs-3"
                aria-selected="false"
              >
                <span className=" fw-bolder">Event</span>
              </a>
            </li>
            <li class="nav-item fw-bolder" role="presentation">
              <a
                class="nav-link"
                id="ex2-tab-1"
                data-mdb-toggle="tab"
                href="#ex6-tabs-6"
                role="tab"
                aria-controls="ex2-tabs-1"
                aria-selected="true"
              >
                <span className="fw-bold">Points and Gift vouchers</span>
              </a>
            </li>
            <li class="nav-item fw-bolder" role="presentation">
              <a
                class="nav-link"
                id="ex2-tab-1"
                data-mdb-toggle="tab"
                href="#ex5-tabs-1"
                role="tab"
                aria-controls="ex2-tabs-1"
                aria-selected="true"
              >
                <span className="fw-bold">Payment</span>
              </a>
            </li>

            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="ex2-tab-2"
                data-mdb-toggle="tab"
                href="#ex2-tabs-2"
                role="tab"
                aria-controls="ex2-tabs-2"
                aria-selected="false"
              >
                <span className=" fw-bolder">TODO</span>
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="ex2-tab-22"
                data-mdb-toggle="tab"
                href="#ex2-tabs-22"
                role="tab"
                aria-controls="ex2-tabs-2"
                aria-selected="false"
              >
                <span className=" fw-bolder">Invoice</span>
              </a>
            </li>
          </ul>
          {/* <!-- Tabs navs --> */}

          {/* <!-- Tabs content --> */}
          <div class="tab-content" id="ex2-content">
            <div
              class="tab-pane fade "
              id="ex2-tabs-2"
              role="tabpanel"
              aria-labelledby="ex2-tab-2"
            >
              <Todo />
            </div>
            <div
              class="tab-pane fade "
              id="ex2-tabs-22"
              role="tabpanel"
              aria-labelledby="ex2-tab-2"
            >
              <Invoice />
            </div>
            <div
              class="tab-pane fade show active"
              id="ex2-tabs-3"
              role="tabpanel"
              aria-labelledby="ex2-tab-3"
            >
              <EventInfo />
            </div>
            <div
              class="tab-pane fade"
              id="ex6-tabs-6"
              role="tabpanel"
              aria-labelledby="ex2-tab-3"
            >
              <Points />
            </div>
            <div
              class="tab-pane fade"
              id="ex5-tabs-1"
              role="tabpanel"
              aria-labelledby="ex2-tab-3"
            >
              <Payment />
            </div>
            <div
              class="tab-pane fade"
              id="ex2-tabs-3"
              role="tabpanel"
              aria-labelledby="ex2-tab-3"
            >
              Event info
            </div>
          </div>
          {/* <!-- Tabs content --> */}
        </div>
      )}
      {eveDisp && (
        <div className="text-center mt-5 pt-5">
          <h1 style={{ "fontVariant": "small-caps", "fontSize":"50px" }} className="fw-bolder mb-3">
            Dhoom Dhamaka
          </h1>
          <p className="fw-bold fs-4 text-danger">
            This page you are viewing is not compatible to mobile.
          </p>
          <p className="fw-bold fs-4 text-danger">
            To access this page, please select the 'Desktop Site' in the browser
            menu or use a desktop/laptop
          </p>
        </div>
      )}
    </div>
  );
}
