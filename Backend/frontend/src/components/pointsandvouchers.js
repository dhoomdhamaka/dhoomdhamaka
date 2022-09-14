import axios from "axios";
import React, { useEffect, useState } from "react";
import { authActions } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./points.css";
function Points() {
    const dispatch = useDispatch();
  const navigate = useNavigate();
    // const datavalue = axios.get("/api/adminuserlist")
    // const final = datavalue.data.points
    const [points, setpoints] = useState("")
    const [voucher, setvoucher] = useState("")

useEffect(()=>{
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
    axios.get("api/eventInfo/postweddingpoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)
      });
    axios.get("api/eventInfo/preweddingpoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)
     });
     axios.get("api/eventInfo/weddingpoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)
     });
     axios.get("api/eventInfo/birthdaypoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)
     });
     axios.get("api/eventInfo/babyshowerpoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)
        
     });
     axios.get("api/eventInfo/familyfunctionpoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)
     });
     axios.get("api/eventInfo/corporatepoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)
     });
     axios.get("api/eventInfo/engagementpoints").then((res) => {
        setpoints(res.data[0].points)
        setvoucher(res.data[0].voucher)  
     });

 
},[])
  return (
    <div class="container mt-5" >
    <div class="row d-flex ">
        <div class="col-md-6">
            <div class="card" style={{minHeight:"60vh"}}>
        <img src="https://bit.ly/3eBYDYg" className="card-img" />

                {/* <div class="text-right p-2">  </div> */}
                <div class="text-center mt-4"> <small class="text-uppercase flat fw-bold text-success ">Points you earned for your next order </small> </div>
        <hr class="my-5" />

                <div class="d-flex justify-content-center px-2">
                    <div class="d-flex flex-row">
                        <h1 class="mt-0 off fw-bold text-black">{points}</h1> <sup class="mt-2 text-primary star">*</sup>
                    </div>
                </div>
                <div class="line">
                </div>
                {/* <div class="text-center mb-5"> <span class="text-uppercase">Rupees you earned for your next order </span> </div> */}
                <div class="text-right p-1"> <small></small> </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
        <img src="https://media.istockphoto.com/photos/girl-holds-tickets-boarding-passes-for-a-flight-picture-id1363169212?b=1&k=20&m=1363169212&s=170667a&w=0&h=V4zz5xXMbOAmqazvFnpQj4HqSx9YRh_apaI2dEgsTI4=" className="card-img" />

                {/* <div class="text-right p-2">  </div> */}
                <div class="text-center mt-4 "> <small class="text-uppercase flat fw-bold text-success">Vouchers you earned for your next order </small> </div>
        <hr class="my-5" />

                <div class="d-flex justify-content-center px-2">
                    <div class="d-flex flex-row">
                        <h1 class="mt-0 off fw-bold text-black">{voucher}</h1> <sup class="mt-2 text-primary star">*</sup>
                    </div>
                </div>
                <div class="line">
                </div>
                {/* <div class="text-center mb-5"> <span class="text-uppercase">Rupees you earned for your next order </span> </div> */}
                <div class="text-right p-1"> <small></small> </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Points;