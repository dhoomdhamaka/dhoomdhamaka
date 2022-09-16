import axios from "axios";
import React, { useEffect, useState } from "react";
import { authActions } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./payment.css";
import PaymentDetail from "./paymentDetail";

function Payment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [datas, setdata] = useState([]);
  const [currentDetail, setCurrentDetail] = useState();
  const [display, setDisplay] = useState(false);
  const [invDisp, setInvDisp] = useState(false);


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
    axios.get("api/payment/getPaymentLists").then((res) => {
      if (res.status === 200) {
        setdata(res.data);
        if (res.data.length > 0) {
          setInvDisp(true);
        }
      }
    });
  }, []);

  console.log(datas);

  async function detailsCall121(item) {
    // axios
    //   .get("api/payment/getPaymentDetails")
    //   .then((res) => {
    //     console.log(res.data);
    //     if(res.status === 200){
    setCurrentDetail(item);
    setDisplay(true);
    console.log(currentDetail);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <div className="mb-10 mt-5" style={{minHeight: "80vh"}}>
      {invDisp && <div className="row justify-content-center mx-5">
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
        
      </div>}
      {!invDisp && (
        <div className="row justify-content-center mt-5 my-auto">
          <div className="col-10 col-md-6 col-xl-4">
            <div className="card rounded-5 shadow-3-strong ">
              <div className="card-body text-center">
                <img src="./images/sademoj.PNG" width={"150px"} className="text-center"/>
                <h1 className="fs-1 fw-bold text-center text-black">OOPS !!!</h1>
                <p className="text-muted">No events booked Yet</p>
              </div>
            </div>
          </div>
        </div>
      )}


      {display && <PaymentDetail data={currentDetail} />}
    </div>
  );

  // </div>
  // );
}

export default Payment;