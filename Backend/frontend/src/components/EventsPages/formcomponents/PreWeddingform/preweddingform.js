import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { authActions } from "../../../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  Client_Name: yup.string().required("Client name must be required"),
  Bride_Name: yup.string().required("Bride name must be required"),
  Groom_Name: yup.string().required("Groom name must be required"),
  date: yup.string().required("Date must be required"),
  fromDate: yup.string().required("From date must be required"),
  ToDate: yup.string().required("To date must be required"),
  ShootingDate: yup.string().required("Shooting date must be required"),
  BachelorPartyDate: yup
    .string()
    .required("Bachelor's Party Date must be required"),
  city: yup.string().required("city name must be required"),
  No_Of_Guests: yup
    .number()
    .typeError("No of Guests must be required")
    .required("No of Guests must be required"),
  Estimate_Budget_Maximum: yup
    .string()
    .required("Estimate Budget Maximum must be required"),
  Estimate_Budget_Minimum: yup
    .string()
    .required("Estimate Budget Minimum must be required"),
});

function PreweddingForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [value, setvalue] = useState("");
  const handleOnchange = (val) => {
    setvalue(val);
  };
  const options = [
    { label: "Indian", value: "Indian" },
    { label: "Western", value: "Western" },
  ];

  const [dancevalue, setdancevalue] = useState("");
  const handledancechange = (val) => {
    setdancevalue(val);
  };
  // dance option end

  // music options start
  const [musicvalue, setmusicvalue] = useState("");
  const handlemusicchange = (val) => {
    setmusicvalue(val);
  };
  const optionsmusic = [
    { label: "Indian", value: "Indian" },
    { label: "Western", value: "Western" },
  ];
  //music options end

  //photography option start

  const [photovalue, setphotovalue] = useState("");
  const handlePhotoChange = (val) => {
    setphotovalue(val);
  };
  const PhotoOptions = [
    { label: "Candid", value: "Candid" },
    { label: "Regular Photography", value: "Regular Photography" },
    { label: "Cinematography", value: "Cinematography" },
    { label: "Video", value: "Video" },
    { label: "Drone Video", value: "Drone Video" },
  ];

  //photography option end
  //invitation start
  const [invitationvalue, setinvitationvalue] = useState("");
  const handleinvitation = (val) => {
    setinvitationvalue(val);
  };
  const invitationtypes = [
    { label: "Physical", value: "Physical" },
    { label: "E-Photo", value: "E-Photo" },
    { label: "E-Video", value: "E-Video" },
    { label: "E-Card", value: "E-Card" },
  ];

  //invitation ends
  //decoration start

  const [decorationvalue, setdecorationvalue] = useState("");
  const handleOnchangedecoration = (val) => {
    setdecorationvalue(val);
  };
  const decorationoptions = [
    // { label:  'Regular Decoration', value:  'Regular Decoration'  },
    {
      label: "Artificial Flowers Decoration",
      value: "Artificial Flowers Decoration",
    },
    { label: "Indoor Decoration", value: "Indoor Decoration" },
    { label: "Outdoor Decoration", value: "Outdoor Decoration" },
    { label: "Lightning Decoration", value: "Lightning Decoration" },
  ];

  //decoration ends

  //Catering start
  const [foodvalue, setfoodvalue] = useState("");
  const handlefoodchange = (val) => {
    setfoodvalue(val);
  };
  const foodtypes = [
    { label: "North Indian", value: "North Indian" },
    { label: "South Indian", value: "South Indian" },
    { label: "Chats", value: "Chats" },
    { label: "Chinese", value: "Chinese" },
    { label: "Korean", value: "Korean" },
    { label: "Mexican", value: "Mexican" },
    { label: "Italian", value: "Italian" },
    { label: "French", value: "French" },
    { label: "Japanese", value: "Japanese" },
    { label: "Russian", value: "Russian" },
    { label: "Spanish", value: "Spanish" },
  ];

  //catering ends

  const [checkedMusic, setCheckedMusic] = useState(false);
  const [checkedDance, setCheckedDance] = useState(false);
  const [checkedVenue, setCheckedVenue] = useState(false);
  const [checkedInvitation, setCheckedInvitation] = useState(false);
  const [checkedPhotography, setCheckedPhotography] = useState(false);

  //do logout

  function doLogout() {
    localStorage.clear("bandhanUserToken");
    dispatch(authActions.logout());
    navigate("/login");
    console.log("Succesfully logged out");
  }

  const name_Of_The_Event = "preWeddingForm";

  function handleSubmit2(data) {
    // premium notification
    const userDate = data.date;
    const changeFormat = new Date(userDate);
    var usermonth = changeFormat.getUTCMonth() + 1; //months from 1-12
    var userday = changeFormat.getUTCDate();
    var useryear = changeFormat.getUTCFullYear();
    const UserSelectDate = useryear + "/" + usermonth + "/" + userday;

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    const currentDate = year + "/" + month + "/" + day;

    const date1 = new Date(UserSelectDate);
    const date2 = new Date(currentDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");

    // if (diffDays < 6) {
    //   toast.success("you are under premium booking!!!", {
    //     position: toast.POSITION.TOP_CENTER,
    //   });
    // }

    console.log(data);

    const checkBoxValues = {
      musicvalue,
      dancevalue,
      foodvalue,
    };
    axios
      .post("/api/prewedding", { data, checkBoxValues,name_Of_The_Event, })
      .then((res) => {
        console.log(res.data);
        if(res.data === "already"){
          toast.success("Already form submitted", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        if(res.data === "saved"){
          if (diffDays < 6) {
            toast.success("you are under premium booking!!!", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
          toast.success("Successfully saved", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => {
            navigate("/")                                 
          }, 2000);
        }
      })
      .catch((err) => {
        if (err.response.data === "Accesss Denied. No Token Provided") {
          console.log(err.response.data);
          doLogout();
        } else {
          if (err.response.data === "Invalid Token") {
            console.log(err);
            doLogout();
          }
          console.log(err);
        }
      });
  }

  return (
    <section class="h-50">
      <div class="container py-5 h-50">
        <div class="row d-flex justify-content-center align-items-center h-50">
          <div class="col-md-11">
            <div class="card shadow-5-strong bdyCard card-registration my-4">
              <div class="row g-0">
                <div class="col-xl-6  d-none d-xl-block">
                  {/* <!-- Gallery --> */}
                  <div className="card example-1 mt-1 scrollbar-ripe-malinka">
                    <div class="row">
                      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3TrGFYp"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />

                        <img
                          src="https://bit.ly/3CG1cmh"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Wintry Mountain Landscape"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3RlgXTv"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Mountains in the Clouds"
                        />

                        <img
                          src="https://bit.ly/3AzkzuC"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3QhxKpX"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Waves at Sea"
                        />

                        <img
                          src="https://bit.ly/3R4UTwH"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Yosemite National Park"
                        />
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3AZEaFv"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />

                        <img
                          src="https://bit.ly/3AZCV9v"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Wintry Mountain Landscape"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3RjM6a4"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Mountains in the Clouds"
                        />

                        <img
                          src="https://bit.ly/3pT8LhT"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3RqEmTx"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Waves at Sea"
                        />

                        <img
                          src="https://bit.ly/3dYo6uE"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Yosemite National Park"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- Gallery --> */}
                </div>
                <div class="col-xl-6">
                  <div class="card-body bg-indigo p-md-5 text-dark fw-bolder rounded">
                    <h3 class="mb-5 text-center fw-bold text-uppercase">
                      Personal Details
                    </h3>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            {...register("Client_Name")}
                            type="text"
                            class="form-control"
                            id="Client_Name"
                            placeholder="Name"
                          />
                          <label for="floatingInput"> Client Name</label>
                          {errors.Client_Name && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.Client_Name?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            {...register("Bride_Name")}
                            type="text"
                            class="form-control"
                            id="Bride_Name"
                            placeholder="Name"
                          />
                          <label for="floatingInput"> Bride Name</label>
                          {errors.Bride_Name && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.Bride_Name?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            {...register("Groom_Name")}
                            type="text"
                            class="form-control"
                            id="Groom_Name"
                            placeholder="Name"
                          />
                          <label for="floatingInput">Groom Name</label>
                          {errors.Groom_Name && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.Groom_Name?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            {...register("date")}
                            type="date"
                            class="form-control"
                            id="date"
                            placeholder="Date"
                          />
                          <label for="floatingInput">Date</label>
                          {errors.date && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.date?.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            {...register("fromDate")}
                            type="date"
                            class="form-control"
                            id="fromDate"
                            placeholder="From"
                          />
                          <label for="floatingInput">From</label>
                          {errors.fromDate && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.fromDate?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            {...register("ToDate")}
                            type="date"
                            class="form-control"
                            id="ToDate"
                            placeholder="To"
                          />
                          <label for="floatingInput">To</label>
                          {errors.ToDate && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.ToDate?.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="form-floating mb-4">
                      <input
                        {...register("city")}
                        type="city"
                        class="form-control"
                        id="city"
                        placeholder="address"
                      />
                      <label for="floatingInput">City</label>
                      {errors.city && (
                        <div class="alert alert-danger mt-2" role="alert">
                          {errors.city?.message}
                        </div>
                      )}
                    </div>
{/* 
                    <div class="btn-group mb-4">
                      <input
                        type="radio"
                        class="btn-check"
                        name="options"
                        id="option1"
                        autocomplete="off"
                        disabled
                      />
                      <label class="btn btn-warning" for="option1">
                        Person
                      </label>
                      <input
                        {...register("Person")}
                        type="radio"
                        class="btn-check"
                        name="option"
                        id="groom"
                        value="Groom"
                      />
                      <label class="btn btn-primary" for="groom">
                        Groom
                      </label>
                      <input
                        {...register("Person")}
                        type="radio"
                        class="btn-check"
                        name="option"
                        id="bride"
                        value="Bride"
                      />
                      <label class="btn btn-primary" for="bride">
                        Bride
                      </label>
                    </div> */}
                    <div class="row">
                      {/* <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            placeholder="To"
                          />
                          <label for="floatingInput">Age</label>
                        </div>
                      </div> */}
                      {/* <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            placeholder="To"
                          />
                          <label for="floatingInput">No of Guests</label>
                        </div>
                      </div> */}
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            {...register("BachelorPartyDate")}
                            type="date"
                            class="form-control"
                            id="BachelorPartyDate"
                            placeholder="To"
                          />
                          <label for="floatingInput">
                            Bachelors Party Date
                          </label>
                          {errors.BachelorPartyDate && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.BachelorPartyDate?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            {...register("ShootingDate")}
                            type="date"
                            class="form-control"
                            id="ShootingDate"
                            placeholder="To"
                          />
                          <label for="floatingInput">Shooting Date</label>
                          {errors.ShootingDate && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.ShootingDate?.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="row"></div>

                    {/* <div class="d-flex justify-content-end pt-3">
                      <button type="button" class="btn btn-info btn-lg ms-2 ">
                        Save
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-5">
        <div class="card bg-light">
          <form
            onSubmit={handleSubmit((data) => {
              handleSubmit2(data);
            })}
          >
            <div class="card-header bg-light border-0">
              <h4 class="mb-0 fw-bolder fs-3 text-center">Pre Wedding Booking</h4>
            </div>

            <div class="card-body px-5">
              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4>
                    <strong>Bachelors Party :</strong>
                  </h4>
                </div>

                <div class="col-md-9">
                  <div class="row"></div>

                  <div class="row">
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="venue"
                          class="form-check-label"
                          value=" "
                          style={{ marginRight: "15px" }}
                        >
                          Venue
                        </label>
                        <input
                          {...register("venue")}
                          type="checkbox"
                          class="form-check-input"
                          id="venue"
                          checked={checkedVenue}
                          onChange={() => {
                            setCheckedVenue(!checkedVenue);
                          }}
                        />
                      </div>
                    </div>
                    {/* <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="magic"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Catering{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="magic"
                        />
                      </div>
                    </div> */}
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="music"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Music
                        </label>
                        <input
                          {...register("music")}
                          type="checkbox"
                          class="form-check-input"
                          id="music"
                          checked={checkedMusic}
                          onChange={() => {
                            setCheckedMusic(!checkedMusic);
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="dance"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Dance
                        </label>
                        <input
                          {...register("dance")}
                          type="checkbox"
                          class="form-check-input"
                          id="dance"
                          checked={checkedDance}
                          onChange={() => {
                            setCheckedDance(!checkedDance);
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-4 ">
                      <div class="form-floating mb-3">
                        <input
                          {...register("No_Of_Guests")}
                          type="number"
                          class="form-control"
                          id="floatingInput"
                          placeholder="To"
                        />
                        <label for="floatingInput">No of Guests</label>
                        {errors.No_Of_Guests && (
                          <div class="alert alert-danger mt-2" role="alert">
                            {errors.No_Of_Guests?.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {checkedMusic && (
                    <div class="row">
                      <div class="mb-3">
                        <div className="preview-values">
                          <h5>
                            <strong>Live Music</strong>
                          </h5>
                          {musicvalue}
                        </div>

                        <MultiSelect
                          onChange={handlemusicchange}
                          options={optionsmusic}
                        />
                      </div>

                      {/* <div class="col-md-3">
                        <div class="mb-3">
                          <label
                            for="dj"
                            class="form-check-label"
                            value=""
                            style={{ marginRight: "15px" }}
                          >
                            DJ{" "}
                          </label>
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="dj"
                          />
                        </div>
                      </div> */}
                    </div>
                  )}

                  {checkedDance && (
                    <div>
                      <div className="preview-values">
                        <h5>
                          <strong>Dance</strong>
                        </h5>
                        {value}
                      </div>

                      <MultiSelect
                        onChange={handledancechange}
                        options={options}
                      />
                    </div>
                  )}
                  <br></br>
                  {checkedVenue && (
                    <div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 1 Name</strong>{" "}
                            </label>
                            <input
                              {...register("Venue_1_Name")}
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                          {errors.venue_1_name && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors?.venue_1_name.message}
                            </div>
                          )}
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 1 place</strong>
                            </label>
                            <input
                              {...register("Venue_1_Place")}
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                          {errors.venue_1_place && (
                            <div class="alert alert-danger mt-2" role="alert">
                              {errors.venue_1_place?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 2 Name</strong>
                            </label>
                            <input
                              {...register("Venue_2_Name")}
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 2 place</strong>
                            </label>
                            <input
                              {...register("Venue_2_Place")}
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 3 Name</strong>
                            </label>
                            <input
                              {...register("Venue_3_Name")}
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 3 place</strong>
                            </label>
                            <input
                              {...register("Venue_3_Place")}
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <br></br>
              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4>
                    <strong>Catering :</strong>
                  </h4>
                </div>

                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="mb-3">
                        <div class="form-check">
                          <input
                            {...register("Food")}
                            class="form-check-input"
                            type="radio"
                            name="Food"
                            id="veg"
                            value={"veg"}
                          />

                          <label
                            class="form-check-label"
                            for="veg"
                          >
                            Veg
                          </label>
                        </div>
                      </div>
                    </div>
                   
                    <div class="col-md-4">
                      <div class="mb-3">
                        <div class="form-check">
                          <input
                            {...register("Food")}
                            class="form-check-input"
                            type="radio"
                            value={"Jain"}
                            name="Food"
                            id="jain"
                          />

                          <label
                            class="form-check-label"
                            for="jain"
                          >
                            Jain
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="preview-values">
                        <h5>
                          <strong>Food Type</strong>{" "}
                        </h5>
                        {foodvalue}
                      </div>

                      <MultiSelect
                        onChange={handlefoodchange}
                        options={foodtypes}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* catering ends  */}

              <hr class="my-5" />

              {/* other events start */}

              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4>
                    <strong>Shooting :</strong>
                  </h4>
                </div>

                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="invitation"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Destination{" "}
                        </label>
                        <input
                          {...register("shooting")}
                          type="checkbox"
                          class="form-check-input"
                          id="invitation"
                          value={"invitation"}
                          checked={checkedInvitation}
                          onChange={() => {
                            setCheckedInvitation(!checkedInvitation);
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="filmcity"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Film city{" "}
                        </label>
                        <input
                          {...register("shooting")}
                          value={"filmcity"}
                          type="checkbox"
                          class="form-check-input"
                          id="filmcity"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="indoor"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Indoor{" "}
                        </label>
                        <input
                          {...register("shooting")}
                          value={"indoor"}
                          type="checkbox"
                          class="form-check-input"
                          id="indoor"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="outdoor"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Outdoor{" "}
                        </label>
                        <input
                          {...register("shooting")}
                          type="checkbox"
                          class="form-check-input"
                          id="outdoor"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="beauty"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Beauty{" "}
                        </label>
                        <input
                          {...register("shooting")}
                          type="checkbox"
                          value={"beauty"}
                          class="form-check-input"
                          id="beauty"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="food"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Food arrangement during shooting{" "}
                        </label>
                        <input
                          {...register("shooting")}
                          type="checkbox"
                          class="form-check-input"
                          id="food"
                          value={"food_arrangement_during_shooting"}
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="transport"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Transport during shooting{" "}
                        </label>
                        <input
                          {...register("shooting")}
                          type="checkbox"
                          class="form-check-input"
                          id="transport"
                          value={"transport_during_shooting"}
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label
                          for="accomodation"
                          class="form-check-label"
                          value=""
                          style={{ marginRight: "15px" }}
                        >
                          Accomodation during shooting{" "}
                        </label>
                        <input
                          {...register("shooting")}
                          type="checkbox"
                          class="form-check-input"
                          id="accomodation"
                          value={"accomodation_during_shooting"}
                        />
                      </div>
                    </div>

                    {/* <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="venue"
                          class="form-check-label"
                          value=" "
                          style={{ marginRight: "15px" }}
                        >
                          Venue{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="venue"
                          checked={checkedVenue}
                          onChange={() => {
                            setCheckedVenue(!checkedVenue);
                          }}
                        />
                      </div>
                    </div> */}
                    {/* <div class="col-md-3">
                      <div class="mb-3">
                        <label
                          for="photography"
                          class="form-check-label"
                          value=" "
                          style={{ marginRight: "15px" }}
                        >
                          Photography{" "}
                        </label>
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="photography"
                          checked={checkedPhotography}
                          onChange={() => {
                            setCheckedPhotography(!checkedPhotography);
                          }}
                        />
                      </div>
                    </div> */}
                  </div>

                  {/* venue options start */}
                  {checkedInvitation && (
                    <div>
                      {/* <div className="preview-values">
                        <h5>
                          <strong>Invitation</strong>{" "}
                        </h5>
                        {invitationvalue}
                      </div>

                      <MultiSelect
                        onChange={handleinvitation}
                        options={invitationtypes}
                      /> */}
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label for="exampleInput1" class="form-label">
                            <strong>Destination Places</strong>
                          </label>
                          <input
                            {...register("destination_Place")}
                            type="text"
                            class="form-control"
                            id="exampleInput1"
                            style={{ maxWidth: "500px" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <br></br>
                  {checkedVenue && (
                    <div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 1 Name</strong>{" "}
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 1 place</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 2 Name</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 2 place</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 3 Name</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="exampleInput1" class="form-label">
                              <strong>Venue 3 place</strong>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInput1"
                              style={{ maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )} */}

                  {/* venue option end */}
                  {checkedPhotography && (
                    <div>
                      <div className="preview-values">
                        <h5>
                          <strong>Photography</strong>
                        </h5>
                        {photovalue}
                      </div>

                      <MultiSelect
                        onChange={handlePhotoChange}
                        options={PhotoOptions}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* other events end */}

              <hr class="my-5" />

              <div class="row gx-xl-5">
                <div class="col-md-3">
                  <h4>
                    <strong>Estimate Budget :</strong>{" "}
                  </h4>
                </div>

                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleInput11" class="form-label">
                          Minimum
                        </label>
                        <input
                          {...register("Estimate_Budget_Minimum")}
                          type="number"
                          class="form-control"
                          id="exampleInput11"
                        />
                      </div>
                      {errors.Estimate_Budget_Minimum && (
                        <div class="alert alert-danger mt-2" role="alert">
                          {errors.Estimate_Budget_Minimum?.message}
                        </div>
                      )}
                    </div>

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleInput12" class="form-label">
                          Maximum
                        </label>
                        <input
                          {...register("Estimate_Budget_Maximum")}
                          type="number"
                          class="form-control"
                          id="Estimate Budget Maximum"
                        />
                      </div>
                      {errors.Estimate_Budget_Maximum && (
                        <div class="alert alert-danger mt-2" role="alert">
                          {errors.Estimate_Budget_Maximum?.message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <hr class="my-5" />

              <div class="row gx-xl-5">
                <div class="col-md-4">
                  <h4>
                    <strong>Special Service :</strong>{" "}
                  </h4>
                  <p>
                    Any additional service you expect from us that may be
                    mentioned here :
                  </p>
                </div>

                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label for="exampleInput11" class="form-label"></label>
                        <textarea
                          {...register("SpecialService")}
                          type="number"
                          class="form-control"
                          id="special service"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <hr class="my-2" /> */}
              <h3>
                <strong>Note 1 : </strong>
              </h3>
              <h4>
                <strong style={{ color: "red" }}>
                  {" "}
                  Once the form is submitted now.Our customer representative
                  will contact you within 12-24 hours to discuss in more detail.
                </strong>
              </h4>
              <h1 class="my-2" /> 
              <h3>
                <strong>Note 2 : </strong>
              </h3>
              <h4>
                <strong style={{ color: "red" }}>
                  {" "}
                  <a href={"/termsandconditions"} > Terms and Conditions </a>
                </strong>
              </h4>
            </div>

            <div class="card-footer text-end py-4 px-5 bg-light border-0">
              <button type="submit" class="btn btn-primary btn-rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PreweddingForm;
