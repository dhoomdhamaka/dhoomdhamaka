import React, { useState, useEffect } from "react";
import axios from "axios";
import PaymentDetail from "../payment/paymentDetail";
import AdminInvoice from "./adminInvoice";
function Orderslist(props) {
  const forms = props.formdata;
  const [datapoints, setdatapoints] = useState("");
  const [updtBtn, setUpdtBtn] = useState(true);
  const [datavoucher, setdatavoucher] = useState("");
  const [postInfo, setPostInfo] = useState("");
  const [refundamount, setrefundamount]= useState()
  const [additional, setAdditional] = useState(false);
  const [additionalReas, setAdditionalReas] = useState(null);
  const [additionalstats, setAdditionalstats] = useState(null);
  const [additionalConf, setAdditionalConf] = useState(null);
  const [additionalPromiseDat, setAdditionalPromiseDate] = useState(null);

  const [honeymoon, setHoneymoon] = useState(false);
  const [honeymoonReas, setHoneymoonReas] = useState(null);
  const [honeymoonstats, setHoneymoonstats] = useState(null);
  const [honeymoonConf, setHoneymoonConf] = useState(null);
  const [honeymoonPromiseDat, setHoneymoonPromiseDate] = useState(null);

  const [muh_Dikhai, setMuh_Dikhai] = useState(false);
  const [muh_DikhaiReas, setmuh_DikhaiReas] = useState(null);
  const [muh_Dikhaistats, setmuh_Dikhaistats] = useState(null);
  const [muh_DikhaiConf, setmuh_DikhaiConf] = useState(null);
  const [muh_DikhaiPromiseDat, setmuh_DikhaiPromiseDate] = useState(null);

  const [subaarambhYatra, setSubaarambhYatra] = useState(false);
  const [subaarambhYatraReas, setsubaarambhYatraReas] = useState(null);
  const [subaarambhYatrastats, setsubaarambhYatrastats] = useState(null);
  const [subaarambhYatraConf, setsubaarambhYatraConf] = useState(null);
  const [subaarambhYatraPromiseDat, setsubaarambhYatraPromiseDate] =
    useState(null);

    const [paymentDetails, setPaymentDetails] = useState(null);

    const [eventCharge, setEventCharge] = useState(null);
    const [bookingCharge, setBookingCharge] = useState(null);
    const [confirmationCharge, setConfirmationCharge] = useState(null);
    const [pendingCharge, setPendingCharge] = useState(null);
  
    const [showPaymentStatus, setShowPaymentStatus] = useState(false);
    const [updtBtnPayment, setUpdtBtnPayment] = useState(true);
    const [showInvocStatus, setInvocStatus] = useState(false);
    const [invocDetails, setInvocDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`api/postwedding/paymentDetails/${forms[0].orderId}`)
      .then((res) => {
        if (res.status === 200) {
          setPaymentDetails(res.data[0]);
          setShowPaymentStatus(true);
          setEventCharge(res.data[0].eventCharge);
          setBookingCharge(res.data[0].bookingCharge);
          setConfirmationCharge(res.data[0].confirmationCharge);
          setPendingCharge(res.data[0].pendingCharge);
        }
      });
      axios.get(`api/invoice/getDetails/${forms[0].orderId}`).then((res) => {
        setInvocDetails(res.data[0]);
        
        setInvocStatus(true)
      });
    axios
      .get(`api/adminuserlist/postweddingpointsvoucher/${forms[0].userId}`)
      .then((res) => {
        setdatapoints(res.data[0].points);
        setdatavoucher(res.data[0].voucher);
      });

    axios
      .get(`api/postwedding/postweddingInfo/${forms[0].orderId}`)
      .then((res) => {
        // setdatapoints(res.data[0].points)
        // setdatavoucher(res.data[0].voucher)
        // console.log(res.data[0]);
        setPostInfo(res.data[0]);
        if (res.data[0].honeymoonConfirmation) {
          setHoneymoonReas(res.data[0].honeymoonReason);
          setHoneymoonConf(res.data[0].honeymoonConfirmation);
          setHoneymoonPromiseDate(res.data[0].honeymoonPromiseDate);
          setHoneymoonstats(res.data[0].honeymoonstatus);
          if (res.data[0].honeymoonConfirmation.length > 4) {
            setHoneymoon(true);
          } else {
            setHoneymoon(false);
          }
        }

        if (res.data[0].AdditionalReason != null) {
          setAdditional(true);
          setAdditionalConf(res.data[0].AdditionalService);
          setAdditionalPromiseDate(res.data[0].AdditionalPromiseDate);
          setAdditionalReas(res.data[0].AdditionalReason);
          setAdditionalstats(res.data[0].AdditionalStatus);
        } else {
          setAdditional(false);
        }
        // console.log(res.data[0].muh_DikhaiConfirmation);

        if (
          // res.data[0].muh_DikhaiReason ||
          res.data[0].muh_DikhaiConfirmation
          // res.data[0].muh_DikhaiPromiseDate ||
          // res.data[0].muh_Dikhaistatus
        ) {
          setmuh_DikhaiReas(res.data[0].muh_DikhaiReason);
          setmuh_DikhaiConf(res.data[0].muh_DikhaiConfirmation);
          setmuh_DikhaiPromiseDate(res.data[0].muh_DikhaiPromiseDate);
          setmuh_Dikhaistats(res.data[0].muh_Dikhaistatus);
          if (res.data[0].muh_DikhaiConfirmation.length > 4) {
            setMuh_Dikhai(true);
          } else {
            setMuh_Dikhai(false);
          }
        }

        if (
          // res.data[0].subaarambhYatraReason ||
          // res.data[0].subaarambhYatrastatus ||
          res.data[0].subaarambhYatraConfirmation
          // res.data[0].subaarambhYatraPromiseDate
        ) {
          setsubaarambhYatraReas(res.data[0].subaarambhYatraReason);
          setsubaarambhYatrastats(res.data[0].subaarambhYatrastatus);
          setsubaarambhYatraPromiseDate(res.data[0].subaarambhYatraPromiseDate);
          setsubaarambhYatraConf(res.data[0].subaarambhYatraConfirmation);
          if (res.data[0].subaarambhYatraConfirmation.length > 4) {
            setSubaarambhYatra(true);
          } else {
            setSubaarambhYatra(false);
          }
        }
      });
  }, []);
  function cancelorder(value){
    if(value=== "Accepted"){
      axios.post(`api/eventInfo/postweddingaccepted/${forms[0].orderId}`).then((res) => {
      });
    }
    if(value=== "Declined"){
      axios.post(`api/eventInfo/postweddingdeclined/${forms[0].orderId}`).then((res) => {
      });
    }
    if(value=== "Refund"){
      axios.post(`api/eventInfo/postweddingrefund/${forms[0].orderId}`,{refundamount}).then((res) => {
      });
    }
  }
  function dlt(){
    axios.delete(`api/eventInfo/postweddingdlt/${forms[0].orderId}`)
    window.location.reload(); 
  
  }
  const orderId = postInfo.orderId;
  function status(value) {
    if (value === "honneymoon") {
      axios
        .post(
          `api/adminuserlist/postweddingchangehonneymoon/${forms[0].orderId}`
        )
        .then((res) => {
          console.log(res.data);
        });
    }
    if (value === "catering") {
      axios
        .post(`api/adminuserlist/postweddingchangecatering/${forms[0].orderId}`)
        .then((res) => {});
    }
  }
  function points(val) {
    axios
      .post(`api/adminuserlist/postweddingpoints/${forms[0].userId}`, { val })
      .then((res) => {
        console.log(res.data);
      });
      window.location.reload(); 
  }
  function voucher(val) {
    axios
      .post(`api/adminuserlist/postweddingvoucher/${forms[0].userId}`, { val })
      .then((res) => {});
      window.location.reload(); 
  }
  function updateEventDetails() {
    const eventDatas = {
      orderId,
      honeymoonConf,
      honeymoonPromiseDat,
      honeymoonReas,
      honeymoonstats,
      muh_DikhaiConf,
      muh_DikhaiPromiseDat,
      muh_Dikhaistats,
      muh_DikhaiReas,
      subaarambhYatraConf,
      subaarambhYatraPromiseDat,
      subaarambhYatraReas,
      subaarambhYatrastats,
      additionalConf,
      additionalPromiseDat,
      additionalReas,
      additionalstats,
    };

    axios
      .post("/api/postwedding/updateInfos", { eventDatas })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function updatePaymentDetails() {
    const paymentUpdation = {
      orderId: paymentDetails.orderId,
      eventCharge,
      bookingCharge,
      confirmationCharge,
      pendingCharge,
    };

    axios
      .post("/api/postwedding/updatePaymentDetails", { paymentUpdation })
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          alert(res.data);
          setUpdtBtnPayment(true);
          window.location.reload(); 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function updateInvoiceDetails(invoiceDet) {
    const sendUpdInvoice = {
      orderId: invoiceDet.orderId,
      muhDikhai: invoiceDet.muhDikhai,
      subharambh: invoiceDet.subharambh,
      honeymoon: invoiceDet.honeymoon,
      addtional: invoiceDet.addtional,
      premium: invoiceDet.premium,
      emergency: invoiceDet.emergency,
    };

    // console.log(sendUpdInvoice.addtional);
    axios
      .post("api/invoice/postwed/updateDetails", { sendUpdInvoice })
      .then((res) => {
        if (res.status === 200) {
          alert("Invoices Details Updated"); 
        }
      })
      .catch((err) => {
        alert("Not Updated , Something Went Wrong", err);
      });
  }
  return (
    <div className="row my-12">
      <h3 className="fs-4 mb-3">Details</h3>
      <div className="col">

      {forms[0] && (<div >
                <div class="card w-75">
                <div class="card-body">
                <h5 class="card-title red">Delete Order</h5>
                <table class="table ">
              <tbody> 
              <tr>
              
            
<td><button type="button" class="btn btn-danger" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
Delete
</button></td>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title " id="exampleModalLabel">Delete User</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">Delete all the order information</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-mdb-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" onClick={(val)=>dlt()}>Delete</button>
      </div>
    </div>
  </div>
</div>

              {/* <td><div className='btn btn-warning btn-sm' onClick={(val)=>dlt()}>Delete</div></td> */}
                  </tr>                
              
              </tbody>
              </table>
                </div>
              </div>      
              
              </div>
              
              
           )}

           
           <hr class="my-5"/>

      {forms[0].cancelrequest && (<div >
                <div class="card w-75">
                <div class="card-body">
                <h5 class="card-title red">Cancel Order</h5>
                <table class="table ">
              <tbody> 
              <tr>
                    <th scope="row" className="fw-bold col-md-8 ">Cancel Request</th>
          <td><div className='btn btn-danger btn-sm' onClick={(val)=>cancelorder("Accepted")}>Accept</div></td>
          <td><div className='btn btn-warning btn-sm' onClick={(val)=>cancelorder("Declined")}>Decline</div></td>
                  </tr>
                 <tr>
                    <td scope="row" className="fw-bold">Refund Amount</td>
                    <td>
                  <input
                 
                    type={"number"}
                    placeholder={"enter refund amount"}
                    // value={refundamount}
                    onChange={(e) => {
                      setrefundamount(e.target.value);
                      // setUpdtBtn(false);
                    }}
                  />  
                  </td>
                <td><div className='btn btn-warning btn-sm' onClick={(val)=>cancelorder("Refund")}>Refund</div></td>
                
                  </tr>
                  <tr>
                  <td><div scope="row" className="fw-bold">Refunded Amount : {forms[0].refund}</div></td>
                  </tr>
                  <tr>
                      <td>
                        <div scope="row" className="fw-bold ">
                         <h4> Cancel Order Status : 
                          <span className="btn btn-success btn-sm">{forms[0].cancelstatus}</span></h4>
                           
                        </div>
                      </td>
                    </tr>
              </tbody>
              </table>
                </div>
              </div>      
              <hr class="my-5"/>
              </div>
              
           )}
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col">Event</th>
              <th className=" fw-bold" scope="col">
                Promise Date
              </th>
              <th className=" fw-bold" scope="col">
                Confirmed
              </th>
              <th className=" fw-bold" scope="col">
                Reason
              </th>
              <th className=" fw-bold" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
          {!!additional && (
              <tr>
                <th>Additional Service</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    onChange={(e) => {
                      setAdditionalPromiseDate(e.target.value);
                      setUpdtBtn(false);
                    }}
                    value={additionalPromiseDat}
                    className={"input"}
                  />
                </td>

                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                    onClick={() => {
                      if (additionalConf == "Not Confirmed") {
                        setAdditionalConf("Confirmed");
                      } else if (additionalConf == "Confirmed") {
                        setAdditionalConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {additionalConf}
                  </div>
                </td>

                <td>
                  <input
                    type={"text"}
                    value={additionalReas}
                    onChange={(e) => {
                      setAdditionalReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>

                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (additionalstats == "pending") {
                        setAdditionalstats("Completed");
                      } else if (additionalstats == "Completed") {
                        setAdditionalstats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {additionalstats}
                  </div>
                </td>
              </tr>
            )}
            {!!honeymoon && (
              <tr>
                <th>Honneymoon</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    onChange={(e) => {
                      setHoneymoonPromiseDate(e.target.value);
                      setUpdtBtn(false);
                    }}
                    value={honeymoonPromiseDat}
                    className={"input"}
                  />
                </td>

                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                    onClick={() => {
                      if (honeymoonConf == "Not Confirmed") {
                        setHoneymoonConf("Confirmed");
                      } else if (honeymoonConf == "Confirmed") {
                        setHoneymoonConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {honeymoonConf}
                  </div>
                </td>

                <td>
                  <input
                    type={"text"}
                    value={honeymoonReas}
                    onChange={(e) => {
                      setHoneymoonReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>

                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (honeymoonstats == "pending") {
                        setHoneymoonstats("Completed");
                      } else if (honeymoonstats == "Completed") {
                        setHoneymoonstats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {honeymoonstats}
                  </div>
                </td>
              </tr>
            )}
            {!!muh_Dikhai && (
              <tr>
                <th>muh_Dikhai</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={muh_DikhaiPromiseDat}
                    type={"date"}
                    onChange={(e) => {
                      setmuh_DikhaiPromiseDate(e.target.value);
                      setUpdtBtn(false);
                    }}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                    onClick={() => {
                      if (muh_DikhaiConf == "Not Confirmed") {
                        setmuh_DikhaiConf("Confirmed");
                      } else if (muh_DikhaiConf == "Confirmed") {
                        setmuh_DikhaiConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {muh_DikhaiConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={muh_DikhaiReas}
                    onChange={(e) => {
                      setmuh_DikhaiReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (muh_Dikhaistats == "pending") {
                        setmuh_Dikhaistats("Completed");
                      } else if (muh_Dikhaistats == "Completed") {
                        setmuh_Dikhaistats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {muh_Dikhaistats}
                  </div>
                </td>
              </tr>
            )}
            {!!subaarambhYatra && (
              <tr>
                <th>subaarambhYatra</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    value={subaarambhYatraPromiseDat}
                    onChange={(e) => {
                      setsubaarambhYatraPromiseDate(e.target.value);
                      setUpdtBtn(false);
                    }}
                    className={"input"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                    onClick={() => {
                      if (subaarambhYatraConf == "Not Confirmed") {
                        setsubaarambhYatraConf("Confirmed");
                      } else if (subaarambhYatraConf == "Confirmed") {
                        setsubaarambhYatraConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {subaarambhYatraConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={subaarambhYatraReas}
                    onChange={(e) => {
                      setsubaarambhYatraReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (subaarambhYatrastats == "pending") {
                        setsubaarambhYatrastats("Completed");
                      } else if (subaarambhYatrastats == "Completed") {
                        setsubaarambhYatrastats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {subaarambhYatrastats}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
          <tr rowspan="5" className="text-center">
            <th></th>
            <th></th>
            <button
              type="button"
              onClick={() => updateEventDetails()}
              className="my-3 btn btn-success"
              disabled={updtBtn}
            >
              Update
            </button>
          </tr>
        </table>
        {/* } */}
        <hr class="my-5" />
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col">Points and Vouchers</th>
              <th className=" fw-bold" scope="col"></th>
              <th className=" fw-bold" scope="col"></th>
              <th className=" fw-bold" scope="col"></th>
              <th className=" fw-bold" scope="col"></th>
              <th className=" fw-bold" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Points</th>
              <td>{datapoints}</td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={(val) => points(50)}
                >
                  50
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(100)}
                >
                  100
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(150)}
                >
                  150
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(200)}
                >
                  200
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(250)}
                >
                  250
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(300)}
                >
                  300
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(350)}
                >
                  350
                </div>
              </td>
             
            </tr>
            <tr>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <div>
            &nbsp;&nbsp;&nbsp;
            </div>
            <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(400)}
                >
                  400
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(450)}
                >
                  450
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(500)}
                >
                  500
                </div>
              </td>
              <td>
                <div
                  className="btn btn-danger btn-sm"
                  onClick={() => points(0)}
                >
                  0
                </div>
              </td>
            </tr>
            <tr>
              <th>Vouchers</th>
              <td>{datavoucher}</td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={(val) => voucher(1000)}
                >
                  1000
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => voucher(2000)}
                >
                  2000
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => voucher(3000)}
                >
                  3000
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => voucher(4000)}
                >
                  4000
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => voucher(5000)}
                >
                  5000
                </div>
              </td>
              <td>
                <div
                  className="btn btn-danger btn-sm"
                  onClick={() => voucher(0)}
                >
                  0
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <hr class="my-5" />
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th className=" fw-bold" scope="col">
                Order Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Bride Name </th>
              <td>{forms[0].BrideName}</td>
            </tr>
            <tr>
              <th>Client Name</th>
              <td>{forms[0].ClientName}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{forms[0].City}</td>
            </tr>
            <tr>
              <th>Food Type</th>
              <td>{forms[0].Food.Foodtype}</td>
            </tr>
            <tr>
              <th>From Date</th>
              <td>{forms[0].FromDate}</td>
            </tr>
            <tr>
              <th>To Date</th>
              <td>{forms[0].ToData}</td>
            </tr>
            <tr>
              <th>Groom Name</th>
              <td>{forms[0].GroomName}</td>
            </tr>
            <tr>
              <th>Food Items</th>
              <td>{forms[0].Food.items}</td>
            </tr>
            <tr>
              <th>Max Budget</th>
              <td>{forms[0].MaxBudget}</td>
            </tr>
            <tr>
              <th>Min Budget</th>
              <td>{forms[0].MinBudget}</td>
            </tr>
            <tr>
              <th>Honney Moon Destination Abroad</th>
              <td>{forms[0].Honneymoon.DestinationAbroad}</td>
            </tr>
            <tr>
              <th>Honney Moon Destination India</th>
              <td>{forms[0].Honneymoon.DestinationIndia}</td>
            </tr>
            <tr>
              <th>Number Of Guests</th>
              <td>{forms[0].NoOfGuests}</td>
            </tr>
            <tr>
              <th>SubaarambhYatra</th>
              <td>{forms[0].SubaarambhYatra[0]}</td>
            </tr>
            <tr>
              <th>SubaarambhYatra</th>
              <td>{forms[0].SubaarambhYatra[1]}</td>
            </tr>
            <tr>
              <th>muhDikhal</th>
              <td>{forms[0].muhDikhal[0]}</td>
            </tr>
            <tr>
              <th>muhDikhal</th>
              <td>{forms[0].muhDikhal[1]}</td>
            </tr>
            <tr>
              <th>muhDikhal</th>
              <td>{forms[0].muhDikhal[2]}</td>
            </tr>

            <tr>
              <th>Dance</th>
              <td>{forms[0].muhDikhalvalue.dancevalues}</td>
            </tr>
            <tr>
              <th>music</th>
              <td>{forms[0].muhDikhalvalue.musicvalues}</td>
            </tr>
            <tr>
              <th>Special Service</th>
              <td>{forms[0].SpecialService}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{forms[0].date}</td>
            </tr>
          </tbody>
        </table>
        <table className="table bg-white rounded shadow-sm text-center">
          <thead>
            <tr>
              <th className="fw-bolder">Payable</th>
              <th className="fw-bolder">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Event Charge</td>
              <td className="row justify-content-center">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      className="form-control"
                      value={eventCharge}
                      onChange={(e) => {
                        setEventCharge(e.target.value);
                        setUpdtBtnPayment(false);
                      }}
                      type={"number"}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Booking Charge</td>
              <td className="row justify-content-center">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      className="form-control"
                      value={bookingCharge}
                      onChange={(e) => {
                        setBookingCharge(e.target.value);
                        setUpdtBtnPayment(false);
                      }}
                      type={"number"}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Confirmation Charge</td>
              <td className="row justify-content-center">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      className="form-control"
                      value={confirmationCharge}
                      onChange={(e) => {
                        setConfirmationCharge(e.target.value);
                        setUpdtBtnPayment(false);
                      }}
                      type={"number"}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Pending Charge</td>
              <td className="row justify-content-center">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      className="form-control"
                      onChange={(e) => {
                        setPendingCharge(e.target.value);
                        setUpdtBtnPayment(false);
                      }}
                      value={pendingCharge}
                      type={"number"}
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tr rowspan="5" className="text-start">
            <th></th>
            {/* <th></th> */}
            <button
              type="button"
              onClick={() => updatePaymentDetails()}
              className="my-3 btn btn-success"
              disabled={updtBtnPayment}
            >
              Update
            </button>
          </tr>
        </table>
        <hr class="my-5" />

        {showPaymentStatus && (
          <PaymentDetail data={paymentDetails} admin={true} />
        )}
        <hr className="my-5" />
        {!!showInvocStatus && (
          <AdminInvoice ordId={forms[0].orderId} details={invocDetails} updateInvoiceDetails={updateInvoiceDetails} />
        )}
      </div>
    </div>
  );
}

export default Orderslist;
