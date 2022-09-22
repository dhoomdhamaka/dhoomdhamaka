import axios from "axios";
import React, { useEffect, useState } from "react";
import { authActions } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Weddingcarousel from "./carousal/weddingcarousel";
import Babyshowercarousel from "./carousal/weddingcarousel";
import Weddingform from "./formcomponents/weddingform/weddingform";
import Weddingprotofolio from "./portfoliocomponents/weddingprotofolio";

export default function Wedding() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [displayEve, setDisplayEve] = useState(false);

  useEffect(() => {
    function doLogout() {
      localStorage.clear("bandhanUserToken");
      dispatch(authActions.logout());
      navigate("/login");
    }

    if (!!localStorage.getItem("bandhanUserToken")) {
      axios
        .get("api/login/getLoginStatus")
        .then((res) => {
          if (res.status === 200) {
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
      <Weddingcarousel />
      <Weddingprotofolio />
      <Weddingform />
    </div>
  );
}
