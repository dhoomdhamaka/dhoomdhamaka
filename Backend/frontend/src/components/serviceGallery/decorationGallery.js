import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// import "./serviceGallery.css";

function DecorationGallery() {
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
            <a href="https://bit.ly/3BawL53">
              <img
                src="https://bit.ly/3BawL53"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3d233rb">
              <img
                src="https://bit.ly/3d233rb"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3xgAw7T">
              <img
                src="https://bit.ly/3xgAw7T"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3RCAvU9">
              <img
                src="https://bit.ly/3RCAvU9"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            {/* second */}
            <a href="https://bit.ly/3RXMTxC" className="d-none">
              <img
                src="https://bit.ly/3RXMTxC"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3RDUqSx" className="d-none">
              <img
                src="https://bit.ly/3RDUqSx"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3DhuNm8" className="d-none">
              <img
                src="https://bit.ly/3DhuNm8"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3eHIMYl" className="d-none">
              <img
                src="https://bit.ly/3eHIMYl"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            {/* third */}
            <a href="https://bit.ly/3qycGB4" className="d-none">
              <img
                src="https://bit.ly/3qycGB4"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3ByK6Wo" className="d-none">
              <img
                src="https://bit.ly/3ByK6Wo"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3L6gKlf" className="d-none">
              <img
                src="https://bit.ly/3L6gKlf"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3ewYN36" className="d-none">
              <img
                src="https://bit.ly/3ewYN36"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
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
            <a href="https://bit.ly/3BawL53" className=" d-none">
              <img
                src="https://bit.ly/3BawL53"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3d233rb" className=" d-none">
              <img
                src="https://bit.ly/3d233rb"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3xgAw7T" className=" d-none">
              <img
                src="https://bit.ly/3xgAw7T"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3RCAvU9" className=" d-none">
              <img
                src="https://bit.ly/3RCAvU9"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            {/* second */}
            <a href="https://bit.ly/3RXMTxC">
              <img
                src="https://bit.ly/3RXMTxC"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3RDUqSx">
              <img
                src="https://bit.ly/3RDUqSx"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3DhuNm8">
              <img
                src="https://bit.ly/3DhuNm8"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3eHIMYl">
              <img
                src="https://bit.ly/3eHIMYl"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            {/* third */}
            <a href="https://bit.ly/3qycGB4" className="d-none">
              <img
                src="https://bit.ly/3qycGB4"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3ByK6Wo" className="d-none">
              <img
                src="https://bit.ly/3ByK6Wo"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3L6gKlf" className="d-none">
              <img
                src="https://bit.ly/3L6gKlf"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3ewYN36" className="d-none">
              <img
                src="https://bit.ly/3ewYN36"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
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
          ><a href="https://bit.ly/3BawL53" className=" d-none">
              <img
                src="https://bit.ly/3BawL53"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3d233rb" className=" d-none">
              <img
                src="https://bit.ly/3d233rb"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3xgAw7T" className=" d-none">
              <img
                src="https://bit.ly/3xgAw7T"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3RCAvU9" className=" d-none">
              <img
                src="https://bit.ly/3RCAvU9"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            {/* second row */}
            <a href="https://bit.ly/3RXMTxC" className=" d-none">
              <img
                src="https://bit.ly/3RXMTxC"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3RDUqSx" className=" d-none">
              <img
                src="https://bit.ly/3RDUqSx"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3DhuNm8" className=" d-none">
              <img
                src="https://bit.ly/3DhuNm8"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3eHIMYl" className=" d-none">
              <img
                src="https://bit.ly/3eHIMYl"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            {/* thirdrow  */}
            <a href="https://bit.ly/3qycGB4">
              <img
                src="https://bit.ly/3qycGB4"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3ByK6Wo">
              <img
                src="https://bit.ly/3ByK6Wo"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3L6gKlf">
              <img
                src="https://bit.ly/3L6gKlf"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
              />
            </a>
            <a href="https://bit.ly/3ewYN36">
              <img
                src="https://bit.ly/3ewYN36"
                class="w-100 shadow-4-strong rounded mb-4"
                alt="Decoration"
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

export default DecorationGallery;
