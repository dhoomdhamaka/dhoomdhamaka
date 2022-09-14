import axios from "axios";
import React, { useEffect, useState } from "react";
import { authActions } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Babyshowercarousel from "./carousal/babyshowercarousel";
import BabyShowerForm from "./formcomponents/babyshowerevent/babyshowerevent";
import Babyshowerprotofolio from "./portfoliocomponents/babyshowerprotofolio";
export default function Babyshower() {
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
      <Babyshowercarousel />
      <Babyshowerprotofolio />
      <BabyShowerForm />
    </div>
  );
}
