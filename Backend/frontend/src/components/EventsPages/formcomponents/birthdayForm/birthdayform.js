import React, { useState } from "react";
import "./birthdayform.css";

function Birthdayform() {
  const [checkedVenue, setCheckedVenue] = useState(false);
  return (
    <section class="h-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-11">
            <div class="card shadow-5-strong bdyCard card-registration my-4">
              <div class="row g-0">
                <div class="col-xl-6  d-none d-xl-block">
                  {/* <img
                    src="https://bit.ly/3PDp0KN"
                    alt="Sample photo"
                    class=" card-img-top rounded img-thumbnail mb-5"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                      // width:"650px",
                      height:"550px"
                    }}
                  />
                  
                  <img
                    src="https://bit.ly/3OmdhPO"
                    alt="Sample photo"
                    class=" card-img-top rounded-4 shadow-2-strong"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                      // width:"650px",
                      height:"552px"
                    }}
                  /> */}
                  {/* <!-- Gallery --> */}
                  <div className="card example-1 mt-1 scrollbar-ripe-malinka">
                    
                    <div class="row">
                      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3o6TYiy"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />

                        <img
                          src="https://bit.ly/3z90bkq"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Wintry Mountain Landscape"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3ob4tkS"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Mountains in the Clouds"
                        />

                        <img
                          src="https://bit.ly/3o6TYiy"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3PgTfar"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Waves at Sea"
                        />

                        <img
                          src="https://bit.ly/3ceNueN"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Yosemite National Park"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3o6TYiy"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />

                        <img
                          src="https://bit.ly/3z90bkq"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Wintry Mountain Landscape"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3ob4tkS"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Mountains in the Clouds"
                        />

                        <img
                          src="https://bit.ly/3o6TYiy"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3PgTfar"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Waves at Sea"
                        />

                        <img
                          src="https://bit.ly/3ceNueN"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Yosemite National Park"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3o6TYiy"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />

                        <img
                          src="https://bit.ly/3z90bkq"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Wintry Mountain Landscape"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3ob4tkS"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Mountains in the Clouds"
                        />

                        <img
                          src="https://bit.ly/3o6TYiy"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Boat on Calm Water"
                        />
                      </div>

                      <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                          src="https://bit.ly/3PgTfar"
                          class="w-100 shadow-4-strong rounded mb-4"
                          alt="Waves at Sea"
                        />

                        <img
                          src="https://bit.ly/3ceNueN"
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
                      Birthday Event Booking
                    </h3>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Name"
                          />
                          <label for="floatingInput">
                            {" "}
                            Birthday person name
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="date"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Date"
                          />
                          <label for="floatingInput">Date</label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="time"
                            class="form-control"
                            id="floatingInput"
                            placeholder="From"
                          />
                          <label for="floatingInput">From</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="time"
                            class="form-control"
                            id="floatingInput"
                            placeholder="To"
                          />
                          <label for="floatingInput">To</label>
                        </div>
                      </div>
                    </div>

                    <div class="form-floating mb-4">
                      <input
                        type="city"
                        class="form-control"
                        id="floatingInput"
                        placeholder="address"
                      />
                      <label for="floatingInput">City</label>
                    </div>

                    {/* <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                      <h4 class="mb-0 me-4 fw-bold">Gender: </h4>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="option1"
                        />
                        <label class="form-check-label" for="femaleGender">
                          Female
                        </label>
                      </div>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="option2"
                        />
                        <label class="form-check-label" for="maleGender">
                          Male
                        </label>
                      </div>

                      <div class="form-check form-check-inline mb-0">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="otherGender"
                          value="option3"
                        />
                        <label class="form-check-label" for="otherGender">
                          Other
                        </label>
                      </div>
                    </div> */}
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
                        Gender
                      </label>
                      <input
                        type="radio"
                        class="btn-check"
                        name="options"
                        id="option11"
                        autocomplete="off"
                      />
                      <label class="btn btn-primary" for="option11">
                        Male
                      </label>
                      <input
                        type="radio"
                        class="btn-check"
                        name="options"
                        id="option2"
                        autocomplete="off"
                      />
                      <label class="btn btn-primary" for="option2">
                        Female
                      </label>

                      <input
                        type="radio"
                        class="btn-check"
                        name="options"
                        id="option3"
                        autocomplete="off"
                      />
                      <label class="btn btn-primary" for="option3">
                        Others
                      </label>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            placeholder="To"
                          />
                          <label for="floatingInput">Age</label>
                        </div>
                      </div>
                      
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            placeholder="To"
                          />
                          <label for="floatingInput">No of Guests</label>
                        </div>
                      </div>
                      
                    </div>


                    
                    {/* <div class="row">
                      <h4 className="fw-bold ">E-Invitation</h4>
                      <br />
                      <br />
                      <div class="col-md-4 mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckCards"
                          />
                          <label class="form-check-label" for="flexCheckCards">
                            cards
                          </label>
                        </div>
                      </div>

                      <div class="col-md-4 mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckPhotos"
                          />
                          <label class="form-check-label" for="flexCheckPhotos">
                            Photos
                          </label>
                        </div>
                      </div>
                      <div class="col-md-4 mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckVideos"
                          />
                          <label class="form-check-label" for="flexCheckVideos">
                            Videos
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <div class="row">
                      <h4 className="fw-bold ">Shows</h4>
                      <br />
                      <br />
                      <div class="col-md-3 mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDance"
                          />
                          <label class="form-check-label" for="flexCheckDance">
                            Dance
                          </label>
                        </div>
                      </div>

                      <div class="col-md-3 mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckMusic"
                          />
                          <label class="form-check-label" for="flexCheckMusic">
                            Music
                          </label>
                        </div>
                      </div>
                      <div class="col-md-3 mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckMagic"
                          />
                          <label class="form-check-label" for="flexCheckMagic">
                            Magic
                          </label>
                        </div>
                      </div>
                      <div class="col-md-3 mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckGames"
                          />
                          <label class="form-check-label" for="flexCheckGames">
                            Games
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <h4 className="fw-bold ">Other Services :</h4>
                      <br />
                      <br />
                      <div class="col-md-4 mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckPhysicalInvitation"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckPhysicalInvitation"
                          >
                            Physical Invitation
                          </label>
                        </div>
                      </div>

                      {/* <div class="col-md-4 mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckPhotography"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckPhotography"
                          >
                            Photography
                          </label>
                        </div>
                      </div> */}


                      {/* Photography options */}
                      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
    data-mdb-toggle="dropdown" aria-expanded="false">
   Photograpgy
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="#">candid</a></li>
    <li>
      <a class="dropdown-item" href="#">Regular Photography</a>
    </li>
    <li>
      <a class="dropdown-item" href="#">Cinematography</a>
    </li>
    <li>
      <a class="dropdown-item" href="#">Video</a>
    </li>
    <li>
      <a class="dropdown-item" href="#">Drone Video</a>
    </li>
    
  </ul>
</div>


                      <div class="col-md-4 mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDecoration"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDecoration"
                          >
                            Decoration
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4 mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckCatering"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckCatering"
                          >
                            Catering
                          </label>
                        </div>
                      </div>

                      <div class="col-md-4 mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckBeauty"
                          />
                          <label class="form-check-label" for="flexCheckBeauty">
                            Beauty
                          </label>
                        </div>
                      </div>
                      <div class="col-md-4 mb-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            checked={checkedVenue}
                            onChange={() => {
                              setCheckedVenue(!checkedVenue);
                            }}
                            id="flexCheckVenue"
                          />
                          <label class="form-check-label" for="flexCheckVenue">
                            Venue
                          </label>
                        </div>
                      </div>
                    </div>
                    {checkedVenue && (
                      <div>
                        <div className="row">
                        <div className=" col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              type="text"
                              class="form-control"
                              id="floatingInput"
                              placeholder="Name"
                              // disabled={!checkedVenue}
                            />
                            <label for="floatingInput" disabled={!checkedVenue}>
                              Venue 1 Name
                            </label>
                          </div>
                        </div>
                        <div className=" col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              type="text"
                              class="form-control"
                              id="floatingInput"
                              placeholder="Name"
                              // disabled={!checkedVenue}
                            />
                            <label for="floatingInput" disabled={!checkedVenue}>
                              Venue 1 Place
                            </label>
                          </div>
                        </div>
                      </div>
                        <div className="row">
                        <div className=" col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              type="text"
                              class="form-control"
                              id="floatingInput"
                              placeholder="Name"
                              // disabled={!checkedVenue}
                            />
                            <label for="floatingInput" disabled={!checkedVenue}>
                              Venue 2 Name
                            </label>
                          </div>
                        </div>
                        <div className=" col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              type="text"
                              class="form-control"
                              id="floatingInput"
                              placeholder="Name"
                              // disabled={!checkedVenue}
                            />
                            <label for="floatingInput" disabled={!checkedVenue}>
                            Venue 2 Place
                            </label>
                          </div>
                        </div>
                      </div>
                        <div className="row">
                        <div className=" col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              type="text"
                              class="form-control"
                              id="floatingInput"
                              placeholder="Name"
                              // disabled={!checkedVenue}
                            />
                            <label for="floatingInput" disabled={!checkedVenue}>
                            Venue 3 Name
                            </label>
                          </div>
                        </div>
                        <div className=" col-md-6 mb-4">
                          <div class="form-floating mb-3">
                            <input
                              type="text"
                              class="form-control"
                              id="floatingInput"
                              placeholder="Name"
                              // disabled={!checkedVenue}
                            />
                            <label for="floatingInput" disabled={!checkedVenue}>
                            Venue 3 Name
                            </label>
                          </div>
                        </div>
                      </div>
                      </div>
                    )}

                    <div class="form-group">
                      <label for="exampleFormControlTextarea1" className="fs-5">
                        Special Services
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>

                    <div class="d-flex justify-content-end pt-3">
                      <button type="button" class="btn btn-warning btn-lg ">
                        Reset all
                      </button>
                      <button type="button" class="btn btn-info btn-lg ms-2 ">
                        Submit form
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   



  );
}

export default Birthdayform;
