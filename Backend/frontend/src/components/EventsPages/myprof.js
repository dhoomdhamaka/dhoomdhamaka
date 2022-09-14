import React from "react";
import Todo from "../todo";

import "./engag.css";
import EventInfo from "./eventInfo/eventInfo";
export default function Engagement() {
  return (
    <div>
      {/* <!-- Tabs navs --> */}
      <ul class="nav nav-pills nav-fill mb-3" id="ex1" role="tablist">
      <li class="nav-item" role="presentation">
          <a
            class="nav-link"
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
            class="nav-link active"
            id="ex2-tab-1"
            data-mdb-toggle="tab"
            href="#ex2-tabs-1"
            role="tab"
            aria-controls="ex2-tabs-1"
            aria-selected="true"
          >
            <span className="fw-bold">Profile</span>
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
            <span className=" fw-bolder">ToDo's</span>
          </a>
        </li>
      </ul>
      {/* <!-- Tabs navs --> */}

      {/* <!-- Tabs content --> */}
      <div class="tab-content" id="ex2-content">
        <div
          class="tab-pane fade show active"
          id="ex2-tabs-1"
          role="tabpanel"
          aria-labelledby="ex2-tab-1"
        >
          <div className="row mt-3">
            <div className="col-md-5 ms-5">
              <div class="card mb-9">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      class="rounded-circle"
                      width="150"
                    />
                    <div class="mt-3">
                      <h4>John Doe</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">
                        Bay Area, San Francisco, CA
                      </p>
                      <button class="btn btn-primary mt-1x">Follow</button>
                      {/* <button class="btn btn-outline-primary">Message</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="ex2-tabs-2"
          role="tabpanel"
          aria-labelledby="ex2-tab-2"
        >
          <Todo />
        </div>
        <div
          class="tab-pane fade"
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
          Points 
        </div>
        <div
          class="tab-pane fade"
          id="ex5-tabs-1"
          role="tabpanel"
          aria-labelledby="ex2-tab-3"
        >
          payment 
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
  );
}
