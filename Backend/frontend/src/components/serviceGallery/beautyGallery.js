import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// import "./serviceGallery.css";

function BeautyGallery() {
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
            <a href="https://bit.ly/3U54dTa">
              <img
                src="https://bit.ly/3U54dTa"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3ByPetK">
              <img
                src="https://bit.ly/3ByPetK"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3RIW05S">
              <img
                src="https://bit.ly/3RIW05S"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3BxUrSi">
              <img
                src="https://bit.ly/3BxUrSi"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            {/* second */}
            <a href="https://bit.ly/3RMnfvQ" className="d-none">
              <img
                src="https://bit.ly/3RMnfvQ"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3Qve2Ha" className="d-none">
              <img
                src="https://bit.ly/3Qve2Ha"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3QB6xP0" className="d-none">
              <img
                src="https://bit.ly/3QB6xP0"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3B63KYp" className="d-none">
              <img
                src="https://bit.ly/3B63KYp"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            {/* third */}
            <a href="https://bit.ly/3d7Tuaa" className="d-none">
              <img
                src="https://bit.ly/3d7Tuaa"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3xgiPFE" className="d-none">
              <img
                src="https://bit.ly/3xgiPFE"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3Dj5LmL" className="d-none">
              <img
                src="https://bit.ly/3Dj5LmL"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3L6ALIw" className="d-none">
              <img
                src="https://bit.ly/3L6ALIw"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
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
            <a href="https://bit.ly/3U54dTa" className=" d-none">
              <img
                src="https://bit.ly/3U54dTa"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3ByPetK" className=" d-none">
              <img
                src="https://bit.ly/3ByPetK"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3RIW05S" className=" d-none">
              <img
                src="https://bit.ly/3RIW05S"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3BxUrSi" className=" d-none">
              <img
                src="https://bit.ly/3BxUrSi"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            {/* second */}
            <a href="https://bit.ly/3RMnfvQ">
              <img
                src="https://bit.ly/3RMnfvQ"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3Qve2Ha">
              <img
                src="https://bit.ly/3Qve2Ha"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3QB6xP0">
              <img
                src="https://bit.ly/3QB6xP0"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3B63KYp">
              <img
                src="https://bit.ly/3B63KYp"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            {/* third */}
            <a href="https://bit.ly/3d7Tuaa" className="d-none">
              <img
                src="https://bit.ly/3d7Tuaa"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3xgiPFE" className="d-none">
              <img
                src="https://bit.ly/3xgiPFE"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3Dj5LmL" className="d-none">
              <img
                src="https://bit.ly/3Dj5LmL"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3L6ALIw" className="d-none">
              <img
                src="https://bit.ly/3L6ALIw"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
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
          ><a href="https://bit.ly/3U54dTa" className=" d-none">
              <img
                src="https://bit.ly/3U54dTa"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3ByPetK" className=" d-none">
              <img
                src="https://bit.ly/3ByPetK"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3RIW05S" className=" d-none">
              <img
                src="https://bit.ly/3RIW05S"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3BxUrSi" className=" d-none">
              <img
                src="https://bit.ly/3BxUrSi"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            {/* second row */}
            <a href="https://bit.ly/3RMnfvQ" className=" d-none">
              <img
                src="https://bit.ly/3RMnfvQ"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3Qve2Ha" className=" d-none">
              <img
                src="https://bit.ly/3Qve2Ha"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3QB6xP0" className=" d-none">
              <img
                src="https://bit.ly/3QB6xP0"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3B63KYp" className=" d-none">
              <img
                src="https://bit.ly/3B63KYp"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            {/* thirdrow  */}
            <a href="https://bit.ly/3d7Tuaa">
              <img
                src="https://bit.ly/3d7Tuaa"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3xgiPFE">
              <img
                src="https://bit.ly/3xgiPFE"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3Dj5LmL">
              <img
                src="https://bit.ly/3Dj5LmL"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
              />
            </a>
            <a href="https://bit.ly/3L6ALIw">
              <img
                src="https://bit.ly/3L6ALIw"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Beauty"
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

export default BeautyGallery;
