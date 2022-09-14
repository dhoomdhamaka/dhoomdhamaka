import axios from "axios";
import React, { useEffect, useState } from "react";
import { authActions } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./birthday.css"
// import "./formcomponents/birthdayform.css"
import Birthdayform from "./formcomponents/birthdayForm/birthdayform"
import Birthdayportfolio from './portfoliocomponents/birthdayportfolio'
import Birthdaycarousal from './carousal/birthdayCarousel/birthdaycarousal'
import Formbirthday from './formcomponents/birthdayForm/formbirthday'
import Finalbirthdayform from './formcomponents/birthdayForm/finalbirthdayform'
export default function Birthday() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [displayEve, setDisplayEve] = useState(false);

  useEffect(() => {
    function doLogout() {
      localStorage.clear("bandhanUserToken");
      dispatch(authActions.logout());
      navigate("/login");
      console.log("Succesfully logged out");
    }

    if (!!localStorage.getItem("bandhanUserToken")) {
      axios
        .get("api/login/getLoginStatus")
        .then((res) => {
          if (res.status === 200) {
            console.log("soop...");
            setDisplayEve(true);
          } else {
            doLogout();
          }
        })
        .catch((err) => {
          doLogout();
        });
    }
  }, []);
  return (
    <div>
    <Birthdaycarousal/>
    <Birthdayportfolio/>
    {/* <Birthdayform/>
    <Formbirthday/> */}
    <Finalbirthdayform/>
	</div>
	
  )
}
