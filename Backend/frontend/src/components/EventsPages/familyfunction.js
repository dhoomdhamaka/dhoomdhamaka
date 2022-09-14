import axios from "axios";
import React, { useEffect, useState } from "react";
import { authActions } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Familyfunctioncarousel from "./carousal/familyfunctioncarousel";
// import "./familfunc.css";
import FamilyfunctionForm from "./formcomponents/FamilyFunctionevent/familyfunctionform";
import Familyfunctionprotofolio from "./portfoliocomponents/familyfunctionprotofolio";

export default function Familyfunction() {
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
      <Familyfunctioncarousel />
      <Familyfunctionprotofolio />
      <FamilyfunctionForm />
    </div>
  );
}
