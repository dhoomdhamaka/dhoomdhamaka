import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function PhotographyGallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="App p-5 m-5">
      {/* <!-- Gallery --> */}
      <p
        className=" text-center pb-5"
        style={{ fontSize: "32px", fontWeight: "bolder" }}
      >
        IT'S TIME TO EXPLORE{" "}
        <span
          className=""
          style={{ fontSize: "32px", fontWeight: "bold", color: "limegreen" }}
        >
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
            <a href="https://bit.ly/3B5hu5L">
              <img
                src="https://bit.ly/3B5hu5L"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3d45kSw">
              <img
                src="https://bit.ly/3d45kSw"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3DihP7C">
              <img
                src="https://bit.ly/3DihP7C"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3eKfXdS">
              <img
                src="https://bit.ly/3eKfXdS"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            {/* second */}
            <a href="./images/imgw2.jpg" className="d-none">
              <img
                src="./images/imgw2.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="./images/cake.JPG" className="d-none">
              <img
                src="./images/cake.JPG"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="./images/img5.jpg" className="d-none">
              <img
                src="./images/img5.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3QvaV1W" className="d-none">
              <img
                src="https://bit.ly/3QvaV1W"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            {/* third */}
            <a href="https://bit.ly/3eLbCH2" className="d-none">
              <img
                src="https://bit.ly/3eLbCH2"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3RCxjYF" className="d-none">
              <img
                src="https://bit.ly/3RCxjYF"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="./images/dancing.jpg" className="d-none">
              <img
                src="./images/dancing.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3U5qKQ3" className="d-none">
              <img
                src="https://bit.ly/3U5qKQ3"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
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
            <a href="https://bit.ly/3B5hu5L" className=" d-none">
              <img
                src="https://bit.ly/3B5hu5L"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3d45kSw" className=" d-none">
              <img
                src="https://bit.ly/3d45kSw"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3DihP7C" className=" d-none">
              <img
                src="https://bit.ly/3DihP7C"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3eKfXdS" className=" d-none">
              <img
                src="https://bit.ly/3eKfXdS"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            {/* second */}
            <a href="./images/imgw2.jpg">
              <img
                src="./images/imgw2.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="./images/cake.JPG">
              <img
                src="./images/cake.JPG"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="./images/img5.jpg">
              <img
                src="./images/img5.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3QvaV1W">
              <img
                src="https://bit.ly/3QvaV1W"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            {/* third */}
            <a href="https://bit.ly/3eLbCH2" className="d-none">
              <img
                src="https://bit.ly/3eLbCH2"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3RCxjYF" className="d-none">
              <img
                src="https://bit.ly/3RCxjYF"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="./images/dancing.jpg" className="d-none">
              <img
                src="./images/dancing.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3U5qKQ3" className="d-none">
              <img
                src="https://bit.ly/3U5qKQ3"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
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
          >
            <a href="https://bit.ly/3B5hu5L" className=" d-none">
              <img
                src="https://bit.ly/3B5hu5L"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3d45kSw" className=" d-none">
              <img
                src="https://bit.ly/3d45kSw"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3DihP7C" className=" d-none">
              <img
                src="https://bit.ly/3DihP7C"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3eKfXdS" className=" d-none">
              <img
                src="https://bit.ly/3eKfXdS"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            {/* second row */}
            <a href="./images/imgw2.jpg" className="d-none">
              <img
                src="./images/imgw2.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="./images/cake.JPG" className=" d-none">
              <img
                src="./images/cake.JPG"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="./images/img5.jpg" className=" d-none">
              <img
                src="./images/img5.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3QvaV1W" className="d-none">
              <img
                src="https://bit.ly/3QvaV1W"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            {/* thirdrow  */}
            <a href="https://bit.ly/3eLbCH2">
              <img
                src="https://bit.ly/3eLbCH2"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3RCxjYF">
              <img
                src="https://bit.ly/3RCxjYF"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="./images/dancing.jpg">
              <img
                src="./images/dancing.jpg"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
              />
            </a>
            <a href="https://bit.ly/3U5qKQ3">
              <img
                src="https://bit.ly/3U5qKQ3"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Photography"
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

export default PhotographyGallery;
