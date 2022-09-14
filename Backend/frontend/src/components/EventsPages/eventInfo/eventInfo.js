import axios from "axios";
import React, { useEffect, useState } from "react";
import EventTable from "./eventTable";

function EventInfo() {
  // const [datas, setdata] = useState([]);
  const [userId , setuserId] = useState("")
 const [preweddingdata, setpreweddingdata] = useState([])
 const [babyshowerdata,setbabyshowerdata ] = useState([])
const [weddingdata, setweddingdata] = useState([])
const [engagementdata, setengagementdata] = useState([])
const [birthdaydata, setbirthdaydata] = useState([])
const [corporatedata, setcorporatedata] = useState([])
const [familyfunctiondata, setfamilyfunctiondata] = useState([])
const [postweddingdata, setpostweddingdata] = useState([])
  
  useEffect(() => {

  
    axios.get("api/eventInfo/getorderId").then((res) => {
      setuserId(res.data[0].userId);
      console.log("userId",res.data[0].userId);

      //req for preWed
    axios
    .get(`api/eventInfo/preweddingInfo/${res.data[0].userId}`)
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpreweddingdata(ll[0]);
        // setpreweddingdata([])

      }
      else{
        setpreweddingdata([])
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for babyshower

  axios
    .get(`api/eventInfo/babyshowerInfo/${res.data[0].userId}`)
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setbabyshowerdata(ll[0]);
      }
      else{
        setbabyshowerdata([])
      }
    })
    .catch((err) => {
      console.log("intha",err);
    });

  //req for Wed

  axios
  .get(`api/eventInfo/weddingInfo/${res.data[0].userId}`)
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setweddingdata(ll[0]);
      }
      else{
        setweddingdata([])
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for engag

  axios
  .get(`api/eventInfo/engagementInfo/${res.data[0].userId}`)
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        // console.log(ll);
        setengagementdata(ll[0]);
      }
      else{
        setengagementdata([])
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for bdy

  axios
  .get(`api/eventInfo/birthdayInfo/${res.data[0].userId}`)
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setbirthdaydata(ll[0]);
      }
      else{
        setbirthdaydata([])
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for corpor

  axios
  .get(`api/eventInfo/corporateInfo/${res.data[0].userId}`)
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setcorporatedata(ll[0]);
      }
      else{
        setcorporatedata([])
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for familfunc

  axios
  .get(`api/eventInfo/familyfunctionInfo/${res.data[0].userId}`)
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setfamilyfunctiondata(ll[0]);
      }
      else{
        setfamilyfunctiondata([])
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for postWed

  axios
  .get(`api/eventInfo/postweddingInfo/${res.data[0].userId}`)
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpostweddingdata(ll[0]);
        // console.log(datas);
      }
      else{
        setpostweddingdata([])
      }
    })
    .catch((err) => {
      console.log(err);
    });
    });

  }, []);


  return (
    <div className=" mt-5 mb-5 ps-5 pe-5 ms-3 me-3 pb-5 pt-3">     
       
          <EventTable
            prewedding = { Object.keys(preweddingdata).length > 1 && preweddingdata}
            postwedding = {Object.keys(postweddingdata).length > 1 && postweddingdata}
            babyshower = {Object.keys(babyshowerdata).length > 1 && babyshowerdata}
            birthday = {Object.keys(birthdaydata).length > 1 && birthdaydata}
            engagement = {Object.keys(engagementdata).length > 1 && engagementdata}
            corporate = {Object.keys(corporatedata).length > 1 && corporatedata}
            familyfunction = {Object.keys(familyfunctiondata).length > 1 && familyfunctiondata}
            wedding = {Object.keys(weddingdata).length > 1 && weddingdata}
            // datas = {datas}
            
          />
        
    
    </div>

  );
}

export default EventInfo;
