import axios from "axios";
import React, { useEffect, useState } from "react";
import {Preweddinginfo} from "./preweddinginfo"
import {Postweddinginfo}  from "./postweddinginfo"
import {Babyshowerinfo} from "./babyshowerinfo"
import {Weddinginfo} from './weddinginfo'
import {Engagementinfo} from "./engagementinfo"
import {Birthdayinfo} from "./birthdayinfo"
import {Corporateinfo} from "./corporateinfo"
import Familyfunctioninfo, {Familfunction} from "./familyfunctioninfo"





function EventTable(props) {

 const [name , setname] = useState("");
 const [datas, setdata] = useState([]);


 const [personalprewedding ,setpersonalprewedding ] = useState([])
 const [personalpostedding ,setpersonalpostwedding ] = useState([])
 const [personalbabyshower ,setpersonalbabyshower ] = useState([])
 const [personalwedding ,setpersonalwedding ] = useState([])
 const [personalengagement ,setpersonalengagement ] = useState([])
 const [personalbirthday ,setpersonalbirthday ] = useState([])
 const [personalcorporate ,setpersonalcorporate ] = useState([])
 const [personalfamily ,setpersonalfamily ] = useState([])






  // let prewedding = props.prewedding
  let prewedding = props.prewedding
  let postwedding =Object.keys(props.postwedding).length > 1 && props.postwedding
  let babyshower =Object.keys(props.babyshower).length > 1 && props.babyshower
  let birthday =Object.keys(props.birthday).length > 1 && props.birthday
  let engagement =Object.keys(props.engagement).length > 1 && props.engagement
  let corporate =Object.keys(props.corporate).length > 1 && props.corporate
  let familyfunction =Object.keys(props.familyfunction).length > 1 && props.familyfunction
  let wedding =Object.keys(props.wedding).length > 1 && props.wedding
 

  useEffect(()=>{
    axios.get("api/eventInfo/getname").then((res) => {
      setname(res.data[0].username);
    });

    
    axios
    .get("api/eventInfo/prewedding")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpersonalprewedding(ll[0]);
        console.log(personalprewedding);
      }
      
    })
    .catch((err) => {
      console.log(err);
    });

  //req for babyshower

  axios
    .get("api/eventInfo/babyshower")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpersonalbabyshower(ll[0]);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for Wed

  axios
    .get("api/eventInfo/wedding")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpersonalwedding(ll[0]);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for engag

  axios
    .get("api/eventInfo/engagement")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        // console.log(ll);
        setpersonalengagement(ll[0]);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for bdy

  axios
    .get("api/eventInfo/birthday")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpersonalbirthday(ll[0]);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for corpor

  axios
    .get("api/eventInfo/corporate")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpersonalcorporate(ll[0]);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for familfunc

  axios
    .get("api/eventInfo/familyfunction")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpersonalfamily(ll[0]);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //req for postWed

  axios
    .get("api/eventInfo/postwedding")
    .then((res) => {
      const ll = res.data;
      if (ll.length > 0) {
        setpersonalpostwedding(ll[0]);
        // console.log(datas);
      }
    })
    .catch((err) => {
      console.log(err);
    });


  },[]);
  

  console.log("preweddingpersonal",personalprewedding);

return (
<>
        { props.prewedding && 
         <Preweddinginfo 
         personalprewedding={personalprewedding} 
         prewedding={props.prewedding&& props.prewedding}
         name ={name}
          />}
     <div class="my-5" />
    { props.engagement && 
         <Engagementinfo 
         personalengagement={personalengagement} 
         engagement={props.engagement&& props.engagement}
         name ={name}
          />}
     <div class="my-5" />
     { props.babyshower && 
         <Babyshowerinfo 
         personalbabyshower={personalbabyshower} 
         babyshower={props.babyshower&& props.babyshower}
         name ={name}
          />}
     <div class="my-5" />
     { props.familyfunction && 
         <Familyfunctioninfo
         personalfamily={personalfamily} 
         familyfunction={props.familyfunction&& props.familyfunction}
         name ={name}
          />}
     <div class="my-5" />
     { props.wedding && 
         <Weddinginfo
         personalwedding={personalwedding} 
         wedding={props.wedding&& props.wedding}
         name ={name}
          />}
     <div class="my-5" />
     { props.birthday && 
         <Birthdayinfo
         personalbirthday={personalbirthday} 
         birthday={props.birthday&& props.birthday}
         name ={name}
          />}
     <div class="my-5" />
     { props.corporate && 
         <Corporateinfo
         personalcorporate={personalcorporate} 
         corporate={props.corporate&& props.corporate}
         name ={name}
          />}
     <div class="my-5" />
     <div class="my-5" />
     { props.postwedding && 
         <Postweddinginfo
         personalpostedding={personalpostedding} 
         postwedding={props.postwedding&& props.postwedding}
         name ={name}
          />}
     <div class="my-5" />
</>

  );
}

export default EventTable;
