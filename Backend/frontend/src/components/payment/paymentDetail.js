import React, { useEffect, useState } from "react";
import axios from "axios";

function PaymentDetail(props) {
  const [paidBtn, setPaidBtn] = useState(true);

  useEffect(() => {
    if (props.admin != undefined) {
      setPaidBtn(false);
    }
  });

  function loadRazorpay(orderAmount, orderid1, refern) {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        const result = await axios.post(
          "api/payment/create-order",
          {
            amount: orderAmount * 100,
          }
        );
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get("api/payment/get-razorpay-key");

        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: "Dhoom Dhamaka",
          description: refern,
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post("api/payment/pay-order", {
              orderId: orderid1,
              amount: amount / 100,
              description: refern,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            });

            if (result.status === 200) {
              console.log("ok");
              window.location.reload();
            }
          },
          prefill: {
            name: "example name",
            email: "email@example.com",
            contact: "111111",
          },
          notes: {
            address: "example address",
          },
          theme: {
            color: "#32a852",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
      }
    };
    document.body.appendChild(script);
  }

  return (
    <div className="row justify-content-center m-2 m-xl-0 m-md-0 my-4">
    <h1 className="fw-bolder mb-3 text-center">Payment Status</h1>
      <div className="col-xl-6 col-md-8">
        <div className="card border border-2 rounded shadow-3-strong border-dark p-md-4 ">
          <table className="table table-borderless mb-5">
            <tbody>
              <tr>
                <td className="fw-bold ps-5">Event Name</td>
                <td className=" text-success text-start">
                  {props.data.eventName}
                </td>
              </tr>
              <tr>
                <td className="fw-bold ps-5">Event Charge</td>
                <td className=" text-start text-success">
                  {props.data.eventCharge}
                </td>
              </tr>
            </tbody>
          </table>  
          <div className="table-responsive">
          <table class="table">
            <thead class="table">
              <tr className="bg-light">
                <th className="fw-bold" scope="col">
                  Payable
                </th>
                <th className="fw-bold" scope="col">
                  Amount
                </th>
                <th className="fw-bold" scope="col">
                  Status
                </th>
                {paidBtn && (
                  <th className="fw-bold" scope="col">
                    Action
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-bold">Booking Charge</td>
                <td>{props.data.bookingCharge}</td>
                {props.data.booking.booking_isPaid && (
                  <td>
                    <span class="badge badge-success rounded-pill d-inline">
                      Paid
                    </span>
                  </td>
                )}
                {!props.data.booking.booking_isPaid && (
                  <td>
                    <span class="badge badge-danger rounded-pill d-inline">
                      Not Paid
                    </span>
                  </td>
                )}
                {paidBtn && (
                  <td>
                    <button
                      type="button"
                      disabled={props.data.booking.booking_isPaid}
                      onClick={() => {
                        loadRazorpay(
                          props.data.bookingCharge,
                          props.data.orderId,
                          "Booking Charge"
                        );
                      }}
                      className="btn btn-sm btn-warning"
                    >
                      Pay
                    </button>
                  </td>
                )}
              </tr>
              <tr>
                {/* <th scope="row">2</th> */}
                <td className="fw-bold">Confirmation Charge</td>
                <td>{props.data.confirmationCharge}</td>
                {props.data.confirmation.confirmation_isPaid && (
                  <td>
                    <span class="badge badge-success rounded-pill d-inline">
                      Paid
                    </span>
                  </td>
                )}
                {!props.data.confirmation.confirmation_isPaid && (
                  <td>
                    <span class="badge badge-danger rounded-pill d-inline">
                      Not Paid
                    </span>
                  </td>
                )}
                {paidBtn && (
                  <td>
                    <button
                      type="button"
                      disabled={props.data.confirmation.confirmation_isPaid}
                      onClick={() => {
                        loadRazorpay(
                          props.data.confirmationCharge,
                          props.data.orderId,
                          "Confirmation Charge"
                        );
                      }}
                      className="btn btn-sm btn-warning"
                    >
                      Pay
                    </button>
                  </td>
                )}
              </tr>
              <tr>
                {/* <th scope="row">3</th> */}
                <td className="fw-bold">Pending Charge</td>
                <td>{props.data.pendingCharge}</td>
                {props.data.pending.pending_isPaid && (
                  <td>
                    <span class="badge badge-success rounded-pill d-inline">
                      Paid
                    </span>
                  </td>
                )}
                {!props.data.pending.pending_isPaid && (
                  <td>
                    <span class="badge badge-danger rounded-pill d-inline">
                      Not Paid
                    </span>
                  </td>
                )}
                {paidBtn && (
                  <td>
                    <button
                      type="button"
                      disabled={props.data.pending.pending_isPaid}
                      onClick={() => {
                        loadRazorpay(
                          props.data.pendingCharge,
                          props.data.orderId,
                          "Pending Charge"
                        );
                      }}
                      className="btn btn-sm btn-warning"
                    >
                      Pay
                    </button>
                  </td>
                )}
              </tr>
            </tbody>{" "}
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetail;