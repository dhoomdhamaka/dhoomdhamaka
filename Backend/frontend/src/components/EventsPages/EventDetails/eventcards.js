import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../../store";
import { Babyshowerinfo } from "../eventInfo/babyshowerinfo";
import { Birthdayinfo } from "../eventInfo/birthdayinfo";
import { Corporateinfo } from "../eventInfo/corporateinfo";
import { Engagementinfo } from "../eventInfo/engagementinfo";
import Familyfunctioninfo from "../eventInfo/familyfunctioninfo";
import { Postweddinginfo } from "../eventInfo/postweddinginfo";
import { Preweddinginfo } from "../eventInfo/preweddinginfo";
import { Weddinginfo } from "../eventInfo/weddinginfo";

function Eventcards() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [datas, setdata] = useState([]);
  const [eventDetail, setEventDetail] = useState();
  const [infoDetail, setInfoDetail] = useState();
  const [display, setDisplay] = useState("ok");
  const [invDisp, setInvDisp] = useState(false);
  const [name , setname] = useState()
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
          } else {
            doLogout();
          }
        })
        .catch((err) => {
          doLogout();
        });
    }
    axios.get("api/eventInfo/getEventBookLists").then((res) => {
      if (res.status === 200) {
        setdata(res.data);
        if (res.data.length > 0) {
          setInvDisp(true);
        }
      }
    });
  }, []);

  async function detailsCall121(item) {
    // setCurrentDetail(item);
    if (item.eventName.trim() === "Wedding Event") {
      axios.get(`api/eventInfo/wedding`).then((res) => {
        console.log(res.data[0]);
        setEventDetail(res.data[0]);
        setInfoDetail(res.data[1]);
        setname(res.data[2].name)
        setDisplay("wedding")
      });
    } else if (item.eventName === "Birthday Event") {
      axios.get(`api/eventInfo/birthday`).then((res) => {
        console.log(res);
        setEventDetail(res.data[0]);
        setInfoDetail(res.data[1]);
        setname(res.data[2].name)
        setDisplay("birthday")
      });
    } else if (item.eventName.trim() === "BabyShower Event") {
      axios.get(`api/eventInfo/babyshower`).then((res) => {
        console.log(res);
        setEventDetail(res.data[0]);
        setInfoDetail(res.data[1]);
        setname(res.data[2].name)
        setDisplay("babyshower")
      });
    } else if (item.eventName.trim() === "PreWedding Event") {
      axios.get(`api/eventInfo/prewedding`).then((res) => {
        console.log(res);
        setEventDetail(res.data[0]);
        setInfoDetail(res.data[1]);
        setname(res.data[2].name)
        setDisplay("prewed")
      });
    } else if (item.eventName.trim() === "PostWedding Event") {
      axios.get(`api/eventInfo/postwedding`).then((res) => {
        console.log(res);
        setEventDetail(res.data[0]);
        setInfoDetail(res.data[1]);
        setname(res.data[2].name)
        setDisplay("postwed")
      });
    } else if (item.eventName.trim() === "Engagement Event") {
      console.log("eng");
      axios.get(`api/eventInfo/engagement`).then((res) => {
        console.log(res);
        setEventDetail(res.data[0]);
        setInfoDetail(res.data[1]);
        setname(res.data[2].name)
        setDisplay("engagement")
      });
    } else if (item.eventName.trim() === "Familyfunction Event") {
      axios.get(`api/eventInfo/familyfunction`).then((res) => {
        console.log(res);
        setEventDetail(res.data[0]);
        setInfoDetail(res.data[1]);
        setname(res.data[2].name)
        setDisplay("family")
      });
    } else if (item.eventName.trim() === "Corporate Event") {
      axios.get(`api/eventInfo/corporate`).then((res) => {
        console.log(res);
        setEventDetail(res.data[0]);
        setInfoDetail(res.data[1]);
        setname(res.data[2].name)
        setDisplay("corp")
      });
    }else{
      console.log("illa no");
    }

    
    setDisplay(true);
    console.log(item);
  }
console.log(name);
  return (
    <div className="mb-10 mt-5" style={{ minHeight: "80vh" }}>
      {invDisp && (
        <div className="row justify-content-center mx-5">
          {datas.map((item, i) => {
            return (
              <div className="col-md-4" key={i}>
                <div className="card rounded shadow-4-strong">
                  <div className="card-body text-center">
                    <h3 className="mb-4 fw-bold">{item.eventName}</h3>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => detailsCall121(item)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className=" mt-8">
      {!invDisp && (
        <div className="row justify-content-center mb-5 mt-5">
          <div className="col-10 col-md-6 col-xl-4">
            <div className="card rounded-5 shadow-3-strong ">
              <div className="card-body text-center">
                <img
                  src="./images/sademoj.PNG"
                  width={"150px"}
                  className="text-center"
                />
                <h1 className="fs-1 fw-bold text-center text-black">
                  OOPS !!!
                </h1>
                <p className="text-muted">No events booked Yet</p>
              </div>
            </div>
          </div>
        </div>
      )}

      </div>
      
      {display === "wedding" && <Weddinginfo wedding={infoDetail} personalwedding={eventDetail} name={name} />}
      {display === "prewed" && <Preweddinginfo prewedding={infoDetail} personalprewedding={eventDetail} name={name}  />}
      {display === "postwed" && <Postweddinginfo postwedding={infoDetail} personalpostedding={eventDetail} name={name}  />}
      {display === "engagement" && <Engagementinfo engagement={infoDetail} personalengagement={eventDetail} name={name}  />}
      {display === "corp" && <Corporateinfo corporate={infoDetail} personalcorporate={eventDetail} name={name} />}
      {display === "family" && <Familyfunctioninfo familyfunction={infoDetail} personalfamily={eventDetail} name={name}  />}
      {display === "babyshower" && <Babyshowerinfo babyshower={infoDetail} personalbabyshower={eventDetail} name={name}  />}
      {display === "birthday" && <Birthdayinfo birthday={infoDetail} personalbirthday={eventDetail} name={name}  />}
    </div>
  );
}

export default Eventcards;
