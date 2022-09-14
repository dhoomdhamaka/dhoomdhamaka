import axios from "axios";
import React, { useEffect, useState } from "react";
import "./dash.css";
import Orders from "./orders";
import Users from "./users";
import Emergency from "./emergency";
import Vendors from "./vendors"
function Admindashboard() {
  const [datas, setdatas] = useState([]);
  const [emergencydata, setemergencydata] = useState([])
  const [vendordata, setvendordata] = useState([])
  const [birthdayids , setbirthdayids] = useState([])
  const [engagementids , setengagementids] = useState([])
  const [preweddingids , setpreweddingids] = useState([])
  const [postweddingids , setpostweddingids] = useState([])
  const [weddingids , setweddingids] = useState([])
  const [babyshowerids , setbabyshowerids] = useState([])
  const [corporateids, setcorporateids] = useState([])
 const [familyfunctionids, setfamilyfunctionids] = useState([])
const [visible, setvisible] = useState(false)

  // const [orderspage, setorderspage] = useState(true);
  const [pages, setpages] = useState("dash");
  const dashorder = () => {
    // setorderspage(true);
    window.location.reload(); 
    setpages("dash");
  };
  const userpage = () => { 
    setpages("user");
    
  };
  const emergency = () => {
    setpages("emergency");
  };
  const vendor = () => {
    setpages("vendor");
  };
  useEffect(() => {
    axios.get("api/isadmincheck").then((res)=>{
      console.log("res",res.data);
      if(res.data === "invalid"){
        setvisible(true)
      }
    })
    axios.get("api/adminuserlist").then((res) => {
      // console.log(res.data);
      setdatas(res.data);
    });
    axios.get("api/emergencyform").then((res) => {
      // console.log(res.data);
      setemergencydata(res.data);
    });
    axios.get("api/emergencyform/vendor").then((res) => {
      // console.log(res.data);
      setvendordata(res.data);
    });
    axios.get("api/adminuserlist/birthdayorder").then((res) => {
      setbirthdayids(res.data);
      // console.log(res.data);
    });
    axios.get("api/adminuserlist/engagementorder").then((res) => {
      setengagementids(res.data);
      console.log(res.data);
    });
    axios.get("api/adminuserlist/preweddingorder").then((res) => {
      setpreweddingids(res.data);
      console.log(res.data);
    });
    axios.get("api/adminuserlist/postweddingorder").then((res) => {
      setpostweddingids(res.data);
      console.log(res.data);
    });
    axios.get("api/adminuserlist/weddingorder").then((res) => {
      setweddingids(res.data);
      console.log(res.data);
    });
    axios.get("api/adminuserlist/babyshowerorder").then((res) => {
      setbabyshowerids(res.data);
      console.log(res.data);
    });
    axios.get("api/adminuserlist/familyfunctionorder").then((res) => {
      setfamilyfunctionids(res.data);
      console.log(res.data);
    });
    axios.get("api/adminuserlist/corporateorder").then((res) => {
      setcorporateids(res.data);
      console.log(res.data);
    });

  }, [0]);

  return (
    <>
    {!visible && (
    <div className="d-flex" id="wrapper">
      <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
          <i className="fas fa-user-secret me-2"></i>Dhoom Dhamaka
        </div>
        <div className="list-group list-group-flush my-3">
          <a className="list-group-item list-group-item-action bg-transparent second-text active">
            <i className="fas fa-tachometer-alt me-2"></i>
            <button onClick={dashorder}>Dashboard</button>
          </a>
          <a className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fas fa-project-diagram me-2"></i>
            <button onClick={dashorder}>Orders</button>
          </a>
          <a className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fas fa-chart-line me-2"></i>
            <button onClick={userpage}>Users</button>
          </a>
          <a className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fas fa-chart-line me-2"></i>
            <button onClick={emergency}>Emergency</button>
          </a>
          <a className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fas fa-chart-line me-2"></i>
            <button onClick={vendor}>Vendors</button>
          </a>
        </div>
      </div>
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
          <div className="d-flex align-items-center">
            <i
              className="fas fa-align-left primary-text fs-4 me-3"
              id="menu-toggle"
            ></i>
            <h2 className="fs-2 m-0">Dashboard</h2>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown"></li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid px-4">
          <div className="row g-3 my-2">
            <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">{datas.length}</h3>
                  <p className="fs-5">Total Users</p>
                </div>
                <i className="fas fa-user fs-1 primary-text border rounded-full secondary-bg p-3"></i>
              </div>
            </div>
          </div>
          {/* Orders */}
          {/* {orderspage && <Orders />} */}
          {pages === "dash" && <Orders 
           birthdayids={birthdayids} 
           engagementids={engagementids}
           preweddingids ={preweddingids}
           postweddingids= {postweddingids}
           weddingids ={weddingids}
           babyshowerids = {babyshowerids}
           corporateids = {corporateids}
           familyfunctionids = {familyfunctionids}
           />}
          {pages === "user" && <Users users={datas} />}
          {pages === "emergency" && <Emergency users={emergencydata} />}
          {pages === "vendor" && <Vendors vendordata={vendordata} />}

          
        </div>
      </div>
    </div>
  )}
  {visible && (
    <div style={{height: "100vh"}}>
   <h1 className="text-center">permission denied</h1>
    </div>
  )}
  </>
  );
  
}

export default Admindashboard;
