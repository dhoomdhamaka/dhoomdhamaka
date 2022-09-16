import axios from "axios";
import React, { useReducer, useState } from "react";
import "./becomevendor.css";

function LoginReducer(state, action) {
  switch (action.type) {
    case "field": {
      // console.log("hii");
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  name: "",
  vendorType: "",
  city: "",
  area: "",
  phoneNo: "",
  email: "",
  year: "",
  // isLoading: false,
  // error: "",
  // isLoggedIn: false
};

export default function Becomevendor() {
  const [state, dispatch] = useReducer(LoginReducer, initialState);
  const { name, email, city, vendorType, area, phoneNo, year } = state;
  const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
  axios.defaults.withCredentials = true;

  const handleChange = (e) => {
    dispatch({
      type: "field",
      fieldName: e.target.name,
      payload: e.target.value,
    });
  };

  
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleSub = async(e) => {
    e.preventDefault();
    const frmDet = {
      name,
      city,
      email,
      vendorType,
      area,
      phoneNo,
      year,
    };
    console.log(frmDet);
    const formData = new FormData();
        formData.append("file", file);
        // formData.append("fileName", fileName);
        formData.append("name", name)
        formData.append("city", city)
        formData.append("email", email)
        formData.append("vendorType", vendorType)
        formData.append("area", area)
        formData.append("phoneNo", phoneNo)
        formData.append("year", year)
        try {
          const res = await axios.post(
            "/api/becomeVendor",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
  }

  return (
    <div class="page-wrapper bg-blue p-t-100 p-b-100 font-robo  m-2">
      <div class="wrapper wrapper--w680">
        <div class="card card-1">
          <div class="card-heading"></div>
          <div class="card-body">
            <h2 class="title">Registration Info</h2>
            <form onSubmit={handleSub} encType="multipart/form-data">
              <div class="input-group">
                <input
                  class="input--style-1"
                  type="text"
                  placeholder="Name of Enterprise"
                  onChange={handleChange}
                  name="name"
                ></input>
              </div>
              <div class="input-group">
                <input
                  class="input--style-1"
                  type="text"
                  placeholder="Vendor Type"
                  name="vendorType"
                  onChange={handleChange}
                ></input>
              </div>
              <div class="row row-space">
                <div class="col-2">
                  <div class="input-group">
                    <input
                      class="input--style-1 js-datepicker"
                      type="text"
                      placeholder="City"
                      name="city"
                      onChange={handleChange}
                    ></input>
                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                  </div>
                </div>
                <div class="col-2">
                  <div class="input-group">
                    <input
                      class="input--style-1 js-datepicker"
                      type="text"
                      placeholder="Area"
                      name="area"
                      onChange={handleChange}
                    ></input>
                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                  </div>
                </div>
              </div>
              <div class="row row-space">
                <div class="col-2">
                  <div class="input-group">
                    <input
                      class="input--style-1 js-datepicker"
                      type="text"
                      placeholder="Phone"
                      name="phoneNo"
                      onChange={handleChange}
                    ></input>
                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                  </div>
                </div>
                <div class="col-2">
                  <div class="input-group">
                    <input
                      class="input--style-1 js-datepicker"
                      type="text"
                      placeholder="E-mail ID"
                      name="email"
                      onChange={handleChange}
                    ></input>
                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                  </div>
                </div>
              </div>
              {/* <div class="row row-space">
                <div class="col-2">
                  <div class="input-group">
                    Samples photos{" "}
                    <input
                      class="input--style-1 js-datepicker"
                      type="file"
                      //   placeholder="Photos"
                      accept=".png, .jpg, .jpeg"
                      name="testImg"
                      onChange={saveFile}
                    ></input>
                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                  </div>
                </div>
                <div class="col-2">
                  <div class="input-group">
                    <input
                      class="input--style-1 js-datepicker"
                      type="text"
                      placeholder="Firm in Existence (Years)"
                      name="year"
                      onChange={handleChange}
                    ></input>
                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                  </div>
                </div>
              </div> */}
              <div>
              {/* <span className="fs-2">Note</span> */}
              <p className="text-danger fw-bold" > <span className="fs-5 text-dark">Note : </span> Send images to <a href="mailto:Dhoomdhamaka0@gmail.com"> dhoomdhamaka0@gmail.com</a></p>
              </div>

              <div class="p-t-20">
                <button class="btn btn--radius btn-success" type="submit">
                  Submit
                </button>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div class="row row-space">
//                         <div class="col-2">
//                             <div class="input-group">
//                                 <input class="input--style-1 js-datepicker" type="text" placeholder=" " name="birthday"></input>
//                                 <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
//                             </div>
//                         </div>
//                         <div class="col-2">
//                             <div class="input-group">
//                                 <div class="rs-select2 js-select-simple select--no-search">
//                                     <select name="gender">
//                                         <option disabled="disabled" selected="selected">GENDER</option>
//                                         <option>Male</option>
//                                         <option>Female</option>
//                                         <option>Other</option>
//                                     </select>
//                                     <div class="select-dropdown"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
