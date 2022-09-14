import React, { useState, useEffect } from 'react'
import BirthdayDetails from "./events/birthday"
import axios from "axios";
import EngagementDetails from "./events/engagement"
import PreweddingDetails from "./events/prewedding"
import PostweddingDetails from "./events/postwedding"
import WeddingDetails from "./events/wedding"
import BabyshowerDetails from "./events/babyshower"
import FamilyfunctionDetails from "./events/familyfunction"
import CorporateDetails from "./events/corporate"

function Orders(props) {
    const birthdayids = props.birthdayids
    const engagementids = props.engagementids
    const preweddingids = props.preweddingids
    const postweddingids = props.postweddingids
    const weddingids = props.weddingids
    const babyshowerids = props.babyshowerids
    const familyfunctionids = props.familyfunctionids
    const corporateids = props.corporateids

    const [clickvalues, setclickvalues] = useState("")
    const [defaultval, setdefault] = useState(false)
    function clicks(val){
        setclickvalues(val)
        setdefault(true)
    }
  return (        
    
    <>
     {!defaultval &&
    <div className="row my-5">
                <h3 className="fs-4 mb-3">Recent Orders</h3>
                <div className="row g-3 my-2">
            <div className="col-md-3" style={{cursor:"pointer"}}  onClick={(val)=>{clicks("birthday")}}>
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div> 
                  <h3 className="fs-2">{birthdayids.length}</h3>
                  <p className="fs-5">Birthday</p>
                </div>
                <i className="fas fa-cake fa-spin fs-1 primary-text border rounded-full secondary-bg p-3"></i>
              </div>
            </div>

            <div className="col-md-3" style={{cursor:"pointer"}}  onClick={(val)=>{clicks("babyshower")}}>
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">{babyshowerids.length}</h3>
                  <p className="fs-5">Baby Showering</p>
                </div>
                <i className="fas fa-baby fa-spin fs-1 primary-text border rounded-full secondary-bg p-3"></i>
              </div>
            </div>

            <div className="col-md-3" style={{cursor:"pointer"}}  onClick={(val)=>{clicks("prewedding")}}>
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">{preweddingids.length }</h3>
                  <p className="fs-5">Pre - Wedding</p>
                </div>
                <i className="fas fa-ring fa-spin fs-1 primary-text border rounded-full secondary-bg p-3"></i>
              </div>
            </div>

            <div className="col-md-3" style={{cursor:"pointer"}}  onClick={(val)=>{clicks("postwedding")}}>
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">{postweddingids.length }</h3>
                  <p className="fs-5">Post - Wedding</p>
                </div>
                <i className="fas fa-ring fa-spin fs-1 primary-text border rounded-full secondary-bg p-3"></i>
              </div>
            </div>
            <div className="col-md-3" style={{cursor:"pointer"}}  onClick={(val)=>{clicks("wedding")}}>
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">{weddingids.length}</h3>
                  <p className="fs-5">Wedding</p>
                </div>
                <i className="fas fa-ring fa-spin fs-1 primary-text border rounded-full secondary-bg p-3"></i>
              </div>
            </div>
            <div className="col-md-3" style={{cursor:"pointer"}}  onClick={(val)=>{clicks("corporate")}}>
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">{corporateids.length}</h3>
                  <p className="fs-5">Corporate Events</p>
                </div>
                <i className="fas fa-building fa-spin fs-1 primary-text border rounded-full secondary-bg p-3"></i>
              </div>
            </div>
            <div className="col-md-3" style={{cursor:"pointer"}}  onClick={(val)=>{clicks("engagement")}}>
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">{engagementids.length}</h3>
                  <p className="fs-5">Engagement</p>
                </div>
                <i className="fas fa-ring fa-spin fs-1 primary-text border rounded-full secondary-bg p-3"></i>
              </div>
            </div>
            <div className="col-md-3" style={{cursor:"pointer"}}  onClick={(val)=>{clicks("familyfunction")}}>
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">{familyfunctionids.length}</h3>
                  <p className="fs-5">Family Function</p>
                </div>
                <i className="fas fa-chart-line fa-spin fs-1 primary-text border rounded-full secondary-bg p-3"></i>
              </div>
            </div>
          </div>
          </div> 
     }
           {clickvalues=== "birthday" &&
             <div className="row my-5">
                <BirthdayDetails birthdayids={birthdayids}/>
            </div>
            }
            {clickvalues=== "engagement" &&
             <div className="row my-5">
                <EngagementDetails engagementids={engagementids}/>
            </div>
            }
            {clickvalues=== "prewedding" &&
             <div className="row my-5">
                <PreweddingDetails preweddingids={preweddingids}/>
            </div>
            }
            {clickvalues=== "postwedding" &&
             <div className="row my-5">
                <PostweddingDetails postweddingids={postweddingids}/>
            </div>
            }
            {clickvalues=== "wedding" &&
             <div className="row my-5">
                <WeddingDetails weddingids={weddingids}/>
            </div>
            }
            {clickvalues=== "babyshower" &&
             <div className="row my-5">
                <BabyshowerDetails babyshowerids={babyshowerids}/>
            </div>
            }
            {clickvalues=== "familyfunction" &&
             <div className="row my-5">
                <FamilyfunctionDetails familyfunctionids={familyfunctionids}/>
            </div>
            }
            {clickvalues=== "corporate" &&
             <div className="row my-5">
                <CorporateDetails corporateids={corporateids}/>
            </div>
            }
           
    </>
  )
}

export default Orders