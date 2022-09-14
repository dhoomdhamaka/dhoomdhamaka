import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// import "./serviceGallery.css";

function CateringGallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    
    <div className="App p-5 m-5">
      {/* <!-- Gallery --> */}
      <p className=" text-center pb-5" style={{ fontSize:"32px" ,fontWeight:"bolder" }}>
        IT'S TIME TO EXPLORE{" "}
        <span className="" style={{ fontSize:"32px" ,fontWeight:"bold" ,color: "limegreen" }}>
          {" "}
          OUR GALLERY
        </span>
      </p>
      <div class="row m-5">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a href="https://bit.ly/3xkn17h">
              <img
                src="https://bit.ly/3xkn17h"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3BaYov1">
              <img
                src="https://bit.ly/3BaYov1"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3QvM4v3">
              <img
                src="https://bit.ly/3QvM4v3"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3B8rnzA">
              <img
                src="https://bit.ly/3B8rnzA"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            {/* second */}
            <a href="https://bit.ly/3U6j7bR" className="d-none">
              <img
                src="https://bit.ly/3U6j7bR"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3eF1j7y" className="d-none">
              <img
                src="https://bit.ly/3eF1j7y"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3Uffjp5" className="d-none">
              <img
                src="https://bit.ly/3Uffjp5"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3eIICzW" className="d-none">
              <img
                src="https://bit.ly/3eIICzW"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            {/* third */}
            <a href="https://bit.ly/3RXotEE" className="d-none">
              <img
                src="https://bit.ly/3RXotEE"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3RZ1bOO" className="d-none">
              <img
                src="https://bit.ly/3RZ1bOO"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3U6CDVY" className="d-none">
              <img
                src="https://bit.ly/3U6CDVY"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3DiLQV8" className="d-none">
              <img
                src="https://bit.ly/3DiLQV8"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
          </LightGallery>
        </div>

        {/* second row  */}

        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            {/* first */}
            <a href="https://bit.ly/3xkn17h" className=" d-none">
              <img
                src="https://bit.ly/3xkn17h"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3BaYov1" className=" d-none">
              <img
                src="https://bit.ly/3BaYov1"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3QvM4v3" className=" d-none">
              <img
                src="https://bit.ly/3QvM4v3"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3B8rnzA" className=" d-none">
              <img
                src="https://bit.ly/3B8rnzA"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            {/* second */}
            <a href="https://bit.ly/3U6j7bR">
              <img
                src="https://bit.ly/3U6j7bR"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3eF1j7y">
              <img
                src="https://bit.ly/3eF1j7y"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3Uffjp5">
              <img
                src="https://bit.ly/3Uffjp5"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3eIICzW">
              <img
                src="https://bit.ly/3eIICzW"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            {/* third */}
            <a href="https://bit.ly/3RXotEE" className="d-none">
              <img
                src="https://bit.ly/3RXotEE"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3RZ1bOO" className="d-none">
              <img
                src="https://bit.ly/3RZ1bOO"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3U6CDVY" className="d-none">
              <img
                src="https://bit.ly/3U6CDVY"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3DiLQV8" className="d-none">
              <img
                src="https://bit.ly/3DiLQV8"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
          </LightGallery>
        </div>

        {/* thirdrow  */}

        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          ><a href="https://bit.ly/3xkn17h" className=" d-none">
              <img
                src="https://bit.ly/3xkn17h"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3BaYov1" className=" d-none">
              <img
                src="https://bit.ly/3BaYov1"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3QvM4v3" className=" d-none">
              <img
                src="https://bit.ly/3QvM4v3"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3B8rnzA" className=" d-none">
              <img
                src="https://bit.ly/3B8rnzA"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            {/* second row */}
            <a href="https://bit.ly/3U6j7bR" className=" d-none">
              <img
                src="https://bit.ly/3U6j7bR"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3eF1j7y" className=" d-none">
              <img
                src="https://bit.ly/3eF1j7y"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3Uffjp5" className=" d-none">
              <img
                src="https://bit.ly/3Uffjp5"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3eIICzW" className=" d-none">
              <img
                src="https://bit.ly/3eIICzW"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            {/* thirdrow  */}
            <a href="https://bit.ly/3RXotEE">
              <img
                src="https://bit.ly/3RXotEE"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3U6CDVY">
              <img
                src="https://bit.ly/3U6CDVY"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3RZ1bOO">
              <img
                src="https://bit.ly/3RZ1bOO"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
            <a href="https://bit.ly/3DiLQV8">
              <img
                src="https://bit.ly/3DiLQV8"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Catering"
              />
            </a>
          </LightGallery>
        </div>

        {/* </LightGallery> */}
      </div>
      {/* <!-- Gallery --> */}
    </div>
  );
}

export default CateringGallery;
