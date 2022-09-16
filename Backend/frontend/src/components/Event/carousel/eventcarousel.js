import React from "react";
import './eventcarousel.css'

function Eventcarousel() {
  return (
    <div>
      <section class="home">
        <div
          id="carousel"
          class="carousel slide carousel-fade"
          data-mdb-ride="carousel"
        >
          <div class="carousel-controls">
            <ol class="carousel-indicators d-none d-md-inline-flex ">
              <li
                data-mdb-target="#carousel"
                data-mdb-slide-to="0"
                class="active"
                style={{ backgroundImage: "url(" + "images/img1.jpg" + ")" }}
              ></li>
              <li
                data-mdb-target="#carousel"
                data-mdb-slide-to="1"
                style={{ backgroundImage: "url(" + "images/img2.jpg" + ")" }}
              ></li>
              <li
                data-mdb-target="#carousel"
                data-mdb-slide-to="2"
                style={{ backgroundImage: "url(" + "images/img3.jpg" + ")" }}
              ></li>
              <li
                data-mdb-target="#carousel"
                data-mdb-slide-to="3"
                style={{ backgroundImage: "url(" + "images/img4.jpg" + ")" }}
              ></li>
              <li
                data-mdb-target="#carousel"
                data-mdb-slide-to="4"
                style={{ backgroundImage: "url(" + "images/img5.jpg" + ")" }}
              ></li>
              <li
                data-mdb-target="#carousel"
                data-mdb-slide-to="5"
                style={{ backgroundImage: "url(" + "images/img6.jpg" + ")" }}
              ></li>
              <li
                data-mdb-target="#carousel"
                data-mdb-slide-to="6"
                style={{ backgroundImage: "url(" + "images/img7.jpg" + ")" }}
              ></li>
              <li
                data-mdb-target="#carousel"
                data-mdb-slide-to="7"
                style={{ backgroundImage: "url(" + "images/img8.jpg" + ")" }}
              ></li>
            </ol>
            <a
              class="carousel-control-prev"
              href="#carousel"
              role="button"
              data-mdb-slide="prev"
            >
              <img src="./images/left-arrow.svg" alt="Prev" />
            </a>
            <a
              class="carousel-control-next"
              href="#carousel"
              role="button"
              data-mdb-slide="next"
            >
              <img src="./images/right-arrow.svg" alt="Next" />
            </a>
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
                    memorable. Whether you’re throwing a birthday party, a
                    cocktail party, or planning a dinner at the honoree’s
                    favorite restaurant, you’ll want to give the guest of honor
                    a Happy Birthday card.
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
                <p>
                  {" "}
                  “Love is the master key that opens the gates of happiness.”
                </p>
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
                  When romance is in the air and the heart chord strikes
                  perfectly then these quotes serve as a cherry on the cake top
                  top with some icing for the lifetime. Have a look at these
                  drool worthy quotes that will make your day. "Once in a while,
                  Right in the middle of an ordinary life, Love gives us a fairy
                  tale."
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
              <img
                alt="First slide"
                class="d-block w-100"
                src="images/img7.jpg"
              />
              <div class="container">
                <h2>corporate function</h2>
                <p>“Your most unhappy customers are your greatest source of learning.</p>
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
                <p>Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Eventcarousel;
