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

      {display && <PaymentDetail data={currentDetail} />}
    </div>
  );

  {
    /* <div className="row justify-content-center">
        <div className="col-md-8 mt-4 mb-7">
          <h3 className=" fw-bold text-center mb-4">Invoices</h3>
          <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
              <tr className=" text-center">
                <th className=" fw-bolder text-capitalize">Title</th>
                <th className=" fw-bolder text-capitalize">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" text-center">
                  <p class="fw-normal mb-1">Designer</p>
                  <p class="text-muted mb-0">UI/UX</p>
                </td>
                <td className=" text-center">₹10,0000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className=" col-md-4">
          <div class="card text-center rounded shadow-5-strong mb-7">
            <div class="card-body border-5">
              <h5 class="card-title mb-4 mt-3 fw-bold">Payment</h5>

              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div class="form-floating mb-5">
                    <input
                      type="number"
                      id="form12"
                      class="form-control mb-4"
                      placeholder="Enter Amount"
                      value={orderAmount}
                      onChange={(e) => setamount(e.target.value)}
                    />
                    <label for="floatingInput">Enter amount ₹</label>
                  </div>
                </div>
              </div>
              <button
                href="{#}"
                type={"button"}
                class="btn btn-primary btn-block btn-lg"
                disabled={loading}
                onClick={loadRazorpay}
              >
                Proceed to payment <i class="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div> */
  }
  // </div>
  // );
}

export default Payment;