import React from "react";
import { Link } from "react-router-dom";

function Babyshowercarousel() {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner rounded-5 shadow-4-strong">
        {/* <!-- first item  --> */}
        <div class="carousel-item hover-zoom active ">
          <img
            alt="First slide"
            class="d-block w-100"
            src="https://bit.ly/3KzSJD9"
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
            {/* <!-- sm dve  --> */}
          </div>
        </div>
        {/* <!-- second item  --> */}
        <div class="carousel-item">
          <img
            alt="Second slide"
            class="d-block w-100"
            // src="https://i.postimg.cc/SQXZtrTZ/2.jpg"
            src="https://bit.ly/3wJeomy"
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
              Celebrate EveryMoment with us
            </p>
          </div>
        </div>
        {/* <!-- third item  --> */}
        <div class="carousel-item">
          <img
            alt="Third slide"
            class="d-block w-100"
            src="https://bit.ly/3wHQBDy"
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
              Celebrate EveryMoment with us
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-inner rounded-5 shadow-4-strong">
        <div
          class="carousel-item ct1 active"
          style={{ backgroundImage: "url(" + "images/img1.jpg" + ")" }}
        >
          {/* <img
                alt="First slide"
                class="d-block w-100"
                src="images/img1.jpg" 
               /> */}
          <div class="container">
            <div class="c1">
              <h2>Birthday </h2>
              <p>
                When someone near and dear to you turns another year older,
                you’ll want to do everything you can to make their day extra
                memorable. Whether you’re throwing a birthday party, a cocktail
                party, or planning a dinner at the honoree’s favorite
                restaurant, you’ll want to give the guest of honor a Happy
                Birthday card.
              </p>
            </div>
          </div>
        </div>
        <div
          class="carousel-item ct2"
          style={{ backgroundImage: "url(" + "images/img2.jpg" + ")" }}
        >
          {/* <img
                alt="First slide"
                class="d-block w-100"
                src="images/img2.jpg"
              /> */}
          <div class="container">
            <h2>Engagement</h2>
            <p> “Love is the master key that opens the gates of happiness.”</p>
          </div>
        </div>
        <div
          class="carousel-item ct3"
          style={{ backgroundImage: "url(" + "images/img3.jpg" + ")" }}
        >
          {/* <img
                alt="First slide"
                class="d-block w-100"
                src="images/img3.jpg"
              /> */}
          <div class="container">
            <h2>Pre wedding</h2>
            <p>
              When romance is in the air and the heart chord strikes perfectly
              then these quotes serve as a cherry on the cake top top with some
              icing for the lifetime. Have a look at these drool worthy quotes
              that will make your day. "Once in a while, Right in the middle of
              an ordinary life, Love gives us a fairy tale."
            </p>
          </div>
        </div>
        <div
          class="carousel-item ct4"
          style={{ backgroundImage: "url(" + "images/img4.jpg" + ")" }}
        >
          {/* <img
                alt="First slide"
                class="d-block w-100"
                src="images/img4.jpg"
              /> */}
          <div class="container">
            <h2>Wedding</h2>
            <p>“True love stories never have endings.”</p>
          </div>
        </div>
        <div
          class="carousel-item ct5"
          style={{ backgroundImage: "url(" + "images/img5.jpg" + ")" }}
        >
          {/* <img
                alt="First slide"
                class="d-block w-100"
                src="images/img5.jpg"
              /> */}
          <div class="container">
            <h2>Post wedding</h2>
            <p>You made me believe in love at first sight.</p>
          </div>
        </div>
        <div
          class="carousel-item ct6"
          style={{ backgroundImage: "url(" + "images/img6.jpg" + ")" }}
        >
          {/* <img
                alt="First slide"
                class="d-block w-100"
                src="images/img6.jpg"
              /> */}
          <div class="container">
            <h2>Baby shower</h2>
            <p>“Wishing all the best for you and your baby-to-be.”</p>
          </div>
        </div>
        <div
          class="carousel-item ct7"
          // style={{ backgroundImage: "url(" + "images/img7.jpg" + ")" }}
        >
          <img alt="First slide" class="d-block w-100" src="images/img7.jpg" />
          <div class="container">
            <h2>corporate function</h2>
            <p>
              “Your most unhappy customers are your greatest source of learning.
            </p>
          </div>
        </div>
        <div
          class="carousel-item ct8"
          style={{ backgroundImage: "url(" + "images/img8.jpg" + ")" }}
        >
          {/* <img
                alt="First slide"
                class="d-block w-100"
                src="images/img8.jpg"
              /> */}
          <div class="container">
            <h2>Family function</h2>
            <p>
              Having somewhere to go is home. Having someone to love is family.
              And having both is a blessing.
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

export default Babyshowercarousel;
