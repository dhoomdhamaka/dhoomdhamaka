import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// import "./serviceGallery.css";

function PoojaGallery() {
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
            <a href="https://bit.ly/3L7V2xx">
              <img
                src="https://bit.ly/3L7V2xx"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3Rv4ptn">
              <img
                src="https://bit.ly/3Rv4ptn"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3BfxkuK">
              <img
                src="https://bit.ly/3BfxkuK"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3d1lP1X">
              <img
                src="https://bit.ly/3d1lP1X"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            {/* second */}
            <a href="https://bit.ly/3L4y9ei" className="d-none">
              <img
                src="https://bit.ly/3L4y9ei"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3qxryQ8" className="d-none">
              <img
                src="https://bit.ly/3qxryQ8"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3qydYfo" className="d-none">
              <img
                src="https://bit.ly/3qydYfo"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3xi39BE" className="d-none">
              <img
                src="https://bit.ly/3xi39BE"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            {/* third */}
            <a href="https://bit.ly/3BACmDr" className="d-none">
              <img
                src="https://bit.ly/3BACmDr"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3LaAFQ3" className="d-none">
              <img
                src="https://bit.ly/3LaAFQ3"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3xgS1VO" className="d-none">
              <img
                src="https://bit.ly/3xgS1VO"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3QA8pHU" className="d-none">
              <img
                src="https://bit.ly/3QA8pHU"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
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
            <a href="https://bit.ly/3L7V2xx" className=" d-none">
              <img
                src="https://bit.ly/3L7V2xx"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3Rv4ptn" className=" d-none">
              <img
                src="https://bit.ly/3Rv4ptn"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3BfxkuK" className=" d-none">
              <img
                src="https://bit.ly/3BfxkuK"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3d1lP1X" className=" d-none">
              <img
                src="https://bit.ly/3d1lP1X"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            {/* second */}
            <a href="https://bit.ly/3L4y9ei">
              <img
                src="https://bit.ly/3L4y9ei"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3qxryQ8">
              <img
                src="https://bit.ly/3qxryQ8"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3qydYfo">
              <img
                src="https://bit.ly/3qydYfo"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3xi39BE">
              <img
                src="https://bit.ly/3xi39BE"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            {/* third */}
            <a href="https://bit.ly/3BACmDr" className="d-none">
              <img
                src="https://bit.ly/3BACmDr"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3LaAFQ3" className="d-none">
              <img
                src="https://bit.ly/3LaAFQ3"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3xgS1VO" className="d-none">
              <img
                src="https://bit.ly/3xgS1VO"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3QA8pHU" className="d-none">
              <img
                src="https://bit.ly/3QA8pHU"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
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
          ><a href="https://bit.ly/3L7V2xx" className=" d-none">
              <img
                src="https://bit.ly/3L7V2xx"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3Rv4ptn" className=" d-none">
              <img
                src="https://bit.ly/3Rv4ptn"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3BfxkuK" className=" d-none">
              <img
                src="https://bit.ly/3BfxkuK"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3d1lP1X" className=" d-none">
              <img
                src="https://bit.ly/3d1lP1X"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            {/* second row */}
            <a href="https://bit.ly/3L4y9ei" className=" d-none">
              <img
                src="https://bit.ly/3L4y9ei"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3qxryQ8" className=" d-none">
              <img
                src="https://bit.ly/3qxryQ8"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3qydYfo" className=" d-none">
              <img
                src="https://bit.ly/3qydYfo"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3xi39BE" className=" d-none">
              <img
                src="https://bit.ly/3xi39BE"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            {/* thirdrow  */}
            <a href="https://bit.ly/3BACmDr">
              <img
                src="https://bit.ly/3BACmDr"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3LaAFQ3">
              <img
                src="https://bit.ly/3LaAFQ3"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3xgS1VO">
              <img
                src="https://bit.ly/3xgS1VO"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
              />
            </a>
            <a href="https://bit.ly/3QA8pHU">
              <img
                src="https://bit.ly/3QA8pHU"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Pooja"
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

export default PoojaGallery;
