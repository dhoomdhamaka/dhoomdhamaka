import React from "react";
import { Link } from "react-router-dom";

function EngagementCarousel() {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner rounded-5 shadow-4-strong">
        {/* <!-- first item  --> */}
        <div class="carousel-item hover-zoom active">
          <img
            alt="First slide"
            class="d-block w-100"
            src="https://bit.ly/3PkZQkc"
          />
          <div
            class="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          ></div>
          <a href="#!" className=" w-100"></a>
          <div class="carousel-caption  d-md-block">
            <h5
              class="animated fw-bold bounceInRight  d-none d-md-block"
              style={{ animationDelay: "1s", overflowY: "hidden" }}
            >
              Dhoom Dhamaka
            </h5>
            {/* <!-- lge dve  --> */}
            <p
              class="animated bounceInLeft d-none d-md-block"
              style={{ animationDelay: "2s" }}
            >
              Celebrate EveryMoment with us
            </p>
            </div>
        </div>
        {/* <!-- second item  --> */}
        <div class="carousel-item">
          <img
            alt="Second slide"
            class="d-block w-100"
            src="https://bit.ly/3csYCVJ"
          />
          <div
            class="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          ></div>
          <div class="carousel-caption  d-md-block">
            <h5
              class="animated fw-bold slideInDown d-none d-md-block"
              style={{ animationDelay: "1s", overflowY: "hidden" }}
            >
              Dhoom Dhamaka
            </h5>
            {/* <!-- large device  --> */}
            <p
              class="animated fadeInUp d-none d-md-block"
              style={{ animationDelay: "2s" }}
            >
              Celebrate EveryMoment with us{" "}
            </p>
            </div>
        </div>
        {/* <!-- third item  --> */}
        <div class="carousel-item">
          <img
            alt="Third slide"
            class="d-block w-100"
            src="https://bit.ly/3aPTE4K"
          />
          <div
            class="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          ></div>

          <div class="carousel-caption  d-md-block">
            <h5
              class="animated fw-bold zoomIn d-none d-md-block"
              style={{ animationDelay: "1s", overflowY: "hidden" }}
            >
              Dhoom Dhamaka
            </h5>
            {/* <!-- lg dve  --> */}
            <p
              class="animated fadeInLeft d-none d-md-block"
              style={{ animationDelay: "2s" }}
            >
              Celebrate EveryMoment with us{" "}
            </p>
            </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon d-none"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon d-none"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default EngagementCarousel;
