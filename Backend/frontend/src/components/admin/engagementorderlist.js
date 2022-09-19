import React, { useState, useEffect } from "react";
import axios from "axios";
import PaymentDetail from "../payment/paymentDetail";
import AdminInvoice from "./adminInvoice";
function Orderslist(props) {
  const forms = props.formdata;
  const [datapoints, setdatapoints] = useState("");
  const [datavoucher, setdatavoucher] = useState("");
  const [updtBtn, setUpdtBtn] = useState(true);
  const [postInfo, setPostInfo] = useState("");
  const [refundamount, setrefundamount] = useState();

  const [additional, setAdditional] = useState(false);
  const [additionalReas, setAdditionalReas] = useState(null);
  const [additionalstats, setAdditionalstats] = useState(null);
  const [additionalConf, setAdditionalConf] = useState(null);
  const [additionalPromiseDat, setAdditionalPromiseDate] = useState(null);
  const [invitation, setInvitation] = useState(false);
  const [invitationReas, setInvitationReas] = useState(null);
  const [invitationstats, setInvitationstats] = useState(null);
  const [invitationConf, setInvitationConf] = useState(null);
  const [invitationPromiseDat, setInvitationPromiseDate] = useState(null);

  const [beauty, setBeauty] = useState(false);
  const [beautyReas, setBeautyReas] = useState(null);
  const [beautystats, setBeautystats] = useState(null);
  const [beautyConf, setBeautyConf] = useState(null);
  const [beautyPromiseDat, setBeautyPromiseDate] = useState(null);

  const [venue, setVenue] = useState(false);
  const [venueReas, setVenueReas] = useState(null);
  const [venuestats, setVenuestats] = useState(null);
  const [venueConf, setVenueConf] = useState(null);
  const [venuePromiseDat, setVenuePromiseDate] = useState(null);

  const [photography, setPhotography] = useState(false);
  const [photographyReas, setPhotographyReas] = useState(null);
  const [photographystats, setPhotographystats] = useState(null);
  const [photographyConf, setPhotographyConf] = useState(null);
  const [photographyPromiseDat, setPhotographyPromiseDate] = useState(null);

  const [catering, setCatering] = useState(false);
  const [cateringReas, setCateringReas] = useState(null);
  const [cateringstats, setCateringstats] = useState(null);
  const [cateringConf, setCateringConf] = useState(null);
  const [cateringPromiseDat, setCateringPromiseDate] = useState(null);

  const [decoration, setDecoration] = useState(false);
  const [decorationReas, setDecorationReas] = useState(null);
  const [decorationstats, setDecorationstats] = useState(null);
  const [decorationConf, setDecorationConf] = useState(null);
  const [decorationPromiseDat, setDecorationPromiseDate] = useState(null);

  const [shows, setShows] = useState(false);
  const [showsReas, setShowsReas] = useState(null);
  const [showsstats, setShowsstats] = useState(null);
  const [showsConf, setShowsConf] = useState(null);
  const [showsPromiseDat, setShowsPromiseDate] = useState(null);

  const [pandit_Ji, setPandit_Ji] = useState(false);
  const [pandit_JiReas, setPandit_JiReas] = useState(null);
  const [pandit_Jistats, setPandit_Jistats] = useState(null);
  const [pandit_JiConf, setPandit_JiConf] = useState(null);
  const [pandit_JiPromiseDat, setPandit_JiPromiseDate] = useState(null);

  const [mehandi, setMehandi] = useState(false);
  const [mehandiReas, setMehandiReas] = useState(null);
  const [mehandistats, setMehandistats] = useState(null);
  const [mehandiConf, setMehandiConf] = useState(null);
  const [mehandiPromiseDat, setMehandiPromiseDate] = useState(null);

  const [hosting, setHosting] = useState(false);
  const [hostingReas, setHostingReas] = useState(null);
  const [hostingstats, setHostingstats] = useState(null);
  const [hostingConf, setHostingConf] = useState(null);
  const [hostingPromiseDat, setHostingPromiseDate] = useState(null);
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
      .get(`api/engagement/paymentDetails/${forms[0].orderId}`)
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

      setInvocStatus(true);
    });
    axios
      .get(`api/adminuserlist/engagementpointsvoucher/${forms[0].userId}`)
      .then((res) => {
        setdatapoints(res.data[0].points);
        setdatavoucher(res.data[0].voucher);

        axios
          .get(`api/engagement/engagementInfo/${forms[0].orderId}`)
          .then((res) => {
            let resDat = res.data[0];
            setPostInfo(res.data[0]);
            console.log(resDat);

            if (resDat.AdditionalReason != null) {
              setAdditional(true);
              setAdditionalConf(resDat.AdditionalService);
              setAdditionalPromiseDate(resDat.AdditionalPromiseDate);
              setAdditionalReas(resDat.AdditionalReason);
              setAdditionalstats(resDat.AdditionalStatus);
            } else {
              setAdditional(false);
            }

            if (resDat.invitationService != null) {
              setInvitation(true);
              setInvitationConf(resDat.invitationService);
              setInvitationPromiseDate(resDat.invitationPromiseDate);
              setInvitationReas(resDat.invitationReason);
              setInvitationstats(resDat.invitationStatus);
            } else {
              setInvitation(false);
            }

            if (resDat.beautyReason != null) {
              setBeauty(true);
              setBeautyConf(resDat.beautyService);
              setBeautyPromiseDate(resDat.beautyPromiseDate);
              setBeautyReas(resDat.beautyReason);
              setBeautystats(resDat.beautyStatus);
            } else {
              setBeauty(false);
            }

            if (resDat.venueReason != null) {
              setVenue(true);
              setVenueConf(resDat.venueService);
              setVenuePromiseDate(resDat.venuePromiseDate);
              setVenueReas(resDat.venueReason);
              setVenuestats(resDat.venueStatus);
            } else {
              setVenue(false);
            }

            if (resDat.photographyReason != null) {
              setPhotography(true);
              setPhotographyConf(resDat.photographyService);
              setPhotographyPromiseDate(resDat.photographyPromiseDate);
              setPhotographyReas(resDat.photographyReason);
              setPhotographystats(resDat.photographyStatus);
            } else {
              setPhotography(false);
            }

            if (resDat.cateringReason != null) {
              console.log("fbjfhb");
              setCatering(true);
              setCateringConf(res.data[0].cateringService);
              setCateringPromiseDate(resDat.cateringPromiseDate);
              setCateringReas(resDat.cateringReason);
              setCateringstats(resDat.cateringStatus);
            } else {
              setCatering(false);
            }

            if (resDat.decorationReason != null) {
              setDecoration(true);
              setDecorationConf(resDat.decorationService);
              setDecorationPromiseDate(resDat.decorationPromiseDate);
              setDecorationReas(resDat.decorationReason);
              setDecorationstats(resDat.decorationStatus);
            } else {
              setDecoration(false);
            }

            if (resDat.showsReason != null) {
              setShows(true);
              setShowsConf(resDat.showsService);
              setShowsPromiseDate(resDat.showsPromiseDate);
              setShowsReas(resDat.showsReason);
              setShowsstats(resDat.showsStatus);
            } else {
              setShows(false);
            }

            if (resDat.pandit_JiReason != null) {
              setPandit_Ji(true);
              setPandit_JiConf(resDat.pandit_JiService);
              setPandit_JiPromiseDate(resDat.pandit_JiPromiseDate);
              setPandit_JiReas(resDat.pandit_JiReason);
              setPandit_Jistats(resDat.pandit_JiStatus);
            } else {
              setPandit_Ji(false);
            }

            if (resDat.mehandiReason != null) {
              setMehandi(true);
              setMehandiConf(resDat.mehandiService);
              setMehandiPromiseDate(resDat.mehandiPromiseDate);
              setMehandiReas(resDat.mehandiReason);
              setMehandistats(resDat.mehandiStatus);
            } else {
              setMehandi(false);
            }

            if (resDat.hostingReason != null) {
              setHosting(true);
              setHostingConf(resDat.hostingService);
              setHostingPromiseDate(resDat.hostingPromiseDate);
              setHostingReas(resDat.hostingReason);
              setHostingstats(resDat.hostingStatus);
            } else {
              setHosting(false);
            }
          });
      });
  }, []);
  function cancelorder(value) {
    if (value === "Accepted") {
      axios
        .post(`api/eventInfo/engagementaccepted/${forms[0].orderId}`)
        .then((res) => {});
    }
    if (value === "Declined") {
      axios
        .post(`api/eventInfo/engagementdeclined/${forms[0].orderId}`)
        .then((res) => {});
    }
    if (value === "Refund") {
      axios
        .post(`api/eventInfo/engagementrefund/${forms[0].orderId}`, {
          refundamount,
        })
        .then((res) => {});
    }
  }
  function dlt() {
    axios.delete(`api/eventInfo/engagementdlt/${forms[0].orderId}`);
    window.location.reload();
  }
  function status(value) {
    if (value === "venue") {
      axios
        .post(`api/adminuserlist/engagementchangevenue/${forms[0].orderId}`)
        .then((res) => {});
    }
    if (value === "decoration") {
      axios
        .post(
          `api/adminuserlist/engagementchangedecoration/${forms[0].orderId}`
        )
        .then((res) => {});
    }
    if (value === "photography") {
      axios
        .post(
          `api/adminuserlist/engagementchangephotography/${forms[0].orderId}`
        )
        .then((res) => {});
    }
    if (value === "catering") {
      axios
        .post(`api/adminuserlist/engagementchangecatering/${forms[0].orderId}`)
        .then((res) => {});
    }
  }
  function points(val) {
    axios
      .post(`api/adminuserlist/engagementpoints/${forms[0].userId}`, { val })
      .then((res) => {});
    window.location.reload();
  }
  function voucher(val) {
    axios
      .post(`api/adminuserlist/engagementvoucher/${forms[0].userId}`, { val })
      .then((res) => {});
    window.location.reload();
  }

  function updateEventDetails() {
    const eventDatas = {
      orderId: postInfo.orderId,
      invitationConf,
      invitationPromiseDat,
      invitationReas,
      invitationstats,
      beautyConf,
      beautyPromiseDat,
      beautyReas,
      beautystats,
      venueConf,
      venuePromiseDat,
      venueReas,
      venuestats,
      cateringConf,
      cateringPromiseDat,
      cateringReas,
      cateringstats,
      decorationConf,
      decorationPromiseDat,
      decorationReas,
      decorationstats,
      photographyConf,
      photographyPromiseDat,
      photographyReas,
      photographystats,
      decorationConf,
      decorationPromiseDat,
      decorationReas,
      decorationstats,
      showsConf,
      showsPromiseDat,
      showsReas,
      showsstats,
      pandit_JiConf,
      pandit_JiPromiseDat,
      pandit_JiReas,
      pandit_Jistats,
      mehandiConf,
      mehandiPromiseDat,
      mehandiReas,
      mehandistats,
      hostingConf,
      hostingPromiseDat,
      hostingReas,
      hostingstats,
      additionalConf,
      additionalPromiseDat,
      additionalReas,
      additionalstats,
    };

    axios
      .post("/api/engagement/updateInfos", { eventDatas })
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          alert("success");
          setUpdtBtn(true);
        }
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
      .post("/api/engagement/updatePaymentDetails", { paymentUpdation })
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
      shows: invoiceDet.shows,
      decoration: invoiceDet.decoration,
      invitaion: invoiceDet.invitaion,
      venue: invoiceDet.venue,
      hosting: invoiceDet.hosting,
      mehandi: invoiceDet.mehandi,
      photography: invoiceDet.photography,
      panditJi: invoiceDet.panditJi,
      catering: invoiceDet.catering,
      beauty: invoiceDet.beauty,
      addtional: invoiceDet.addtional,
      premium: invoiceDet.premium,
      emergency: invoiceDet.emergency,
    };

    // console.log(sendUpdInvoice.addtional);
    axios
      .post("api/invoice/eng/updateDetails", { sendUpdInvoice })
      .then((res) => {
        if (res.status === 200) {
          alert("Invoices Details Updated");
        }
      });
  }
  return (
    <div className="row my-12">
      <h3 className="fs-4 mb-3">Details</h3>
      <div className="col">
        {forms[0] && (
          <div>
            <div class="card w-75">
              <div class="card-body">
                <h5 class="card-title red">Delete Order</h5>
                <table class="table ">
                  <tbody>
                    <tr>
                      <td>
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-mdb-toggle="modal"
                          data-mdb-target="#exampleModal"
                        >
                          Delete
                        </button>
                      </td>

                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title " id="exampleModalLabel">
                                Delete User
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              Delete all the order information
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-warning"
                                data-mdb-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                class="btn btn-danger"
                                onClick={(val) => dlt()}
                              >
                                Delete
                              </button>
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

        <hr class="my-5" />

        {forms[0].cancelrequest && (
          <div>
            <div class="card w-75">
              <div class="card-body">
                <h5 class="card-title red">Cancel Order</h5>
                <table class="table ">
                  <tbody>
                    <tr>
                      <th scope="row" className="fw-bold col-md-8 ">
                        Cancel Request
                      </th>
                      <td>
                        <div
                          className="btn btn-danger btn-sm"
                          onClick={(val) => cancelorder("Accepted")}
                        >
                          Accept
                        </div>
                      </td>
                      <td>
                        <div
                          className="btn btn-warning btn-sm"
                          onClick={(val) => cancelorder("Declined")}
                        >
                          Decline
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td scope="row" className="fw-bold">
                        Refund Amount
                      </td>
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
                      <td>
                        <div
                          className="btn btn-warning btn-sm"
                          onClick={(val) => cancelorder("Refund")}
                        >
                          Refund
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div scope="row" className="fw-bold">
                          Refunded Amount : {forms[0].refund}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div scope="row" className="fw-bold ">
                          <h4>
                            {" "}
                            Cancel Order Status :
                            <span className="btn btn-success btn-sm">
                              {forms[0].cancelstatus}
                            </span>
                          </h4>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <hr class="my-5" />
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
            {!!invitation && (
              <tr>
                <th>Invitation</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    onChange={(e) => {
                      setInvitationPromiseDate(e.target.value);
                      setUpdtBtn(false);
                    }}
                    value={invitationPromiseDat}
                    className={"input"}
                  />
                </td>

                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                    onClick={() => {
                      if (invitationConf == "Not Confirmed") {
                        setInvitationConf("Confirmed");
                      } else if (invitationConf == "Confirmed") {
                        setInvitationConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {invitationConf}
                  </div>
                </td>

                <td>
                  <input
                    type={"text"}
                    value={invitationReas}
                    onChange={(e) => {
                      setInvitationReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>

                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (invitationstats == "pending") {
                        setInvitationstats("Completed");
                      } else if (invitationstats == "Completed") {
                        setInvitationstats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {invitationstats}
                  </div>
                </td>
              </tr>
            )}
            {!!beauty && (
              <tr>
                <th>Beauty</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={beautyPromiseDat}
                    type={"date"}
                    onChange={(e) => {
                      setBeautyPromiseDate(e.target.value);
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
                      if (beautyConf == "Not Confirmed") {
                        setBeautyConf("Confirmed");
                      } else if (beautyConf == "Confirmed") {
                        setBeautyConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {beautyConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={beautyReas}
                    onChange={(e) => {
                      setBeautyReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (beautystats == "pending") {
                        setBeautystats("Completed");
                      } else if (beautystats == "Completed") {
                        setBeautystats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {beautystats}
                  </div>
                </td>
              </tr>
            )}
            {!!venue && (
              <tr>
                <th>Venue</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    value={venuePromiseDat}
                    onChange={(e) => {
                      setVenuePromiseDate(e.target.value);
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
                      if (venueConf == "Not Confirmed") {
                        setVenueConf("Confirmed");
                      } else if (venueConf == "Confirmed") {
                        setVenueConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {venueConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={venueReas}
                    onChange={(e) => {
                      setVenueReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (venuestats == "pending") {
                        setVenuestats("Completed");
                      } else if (venuestats == "Completed") {
                        setVenuestats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {venuestats}
                  </div>
                </td>
              </tr>
            )}
            {!!catering && (
              <tr>
                <th>Catering</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    value={cateringPromiseDat}
                    onChange={(e) => {
                      setCateringPromiseDate(e.target.value);
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
                      if (cateringConf == "Not Confirmed") {
                        setCateringConf("Confirmed");
                      } else if (cateringConf == "Confirmed") {
                        setCateringConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {cateringConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={cateringReas}
                    onChange={(e) => {
                      setCateringReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (cateringstats == "pending") {
                        setCateringstats("Completed");
                      } else if (cateringstats == "Completed") {
                        setCateringstats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {cateringstats}
                  </div>
                </td>
              </tr>
            )}
            {!!photography && (
              <tr>
                <th>Photography</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    value={photographyPromiseDat}
                    onChange={(e) => {
                      setPhotographyPromiseDate(e.target.value);
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
                      if (photographyConf == "Not Confirmed") {
                        setPhotographyConf("Confirmed");
                      } else if (photographyConf == "Confirmed") {
                        setPhotographyConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {photographyConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={photographyReas}
                    onChange={(e) => {
                      setPhotographyReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (photographystats == "pending") {
                        setPhotographystats("Completed");
                      } else if (photographystats == "Completed") {
                        setPhotographystats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {photographystats}
                  </div>
                </td>
              </tr>
            )}
            {!!decoration && (
              <tr>
                <th>Decoration</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    value={decorationPromiseDat}
                    onChange={(e) => {
                      setDecorationPromiseDate(e.target.value);
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
                      if (decorationConf == "Not Confirmed") {
                        setDecorationConf("Confirmed");
                      } else if (decorationConf == "Confirmed") {
                        setDecorationConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {decorationConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={decorationReas}
                    onChange={(e) => {
                      setDecorationReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (decorationstats == "pending") {
                        setDecorationstats("Completed");
                      } else if (decorationstats == "Completed") {
                        setDecorationstats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {decorationstats}
                  </div>
                </td>
              </tr>
            )}
            {!!shows && (
              <tr>
                <th>Shows</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    value={showsPromiseDat}
                    onChange={(e) => {
                      setShowsPromiseDate(e.target.value);
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
                      if (showsConf == "Not Confirmed") {
                        setShowsConf("Confirmed");
                      } else if (showsConf == "Confirmed") {
                        setShowsConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {showsConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={showsReas}
                    onChange={(e) => {
                      setShowsReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (showsstats == "pending") {
                        setShowsstats("Completed");
                      } else if (showsstats == "Completed") {
                        setShowsstats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {showsstats}
                  </div>
                </td>
              </tr>
            )}
            {!!pandit_Ji && (
              <tr>
                <th>Pandi Ji</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    value={pandit_JiPromiseDat}
                    onChange={(e) => {
                      setPandit_JiPromiseDate(e.target.value);
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
                      if (pandit_JiConf == "Not Confirmed") {
                        setPandit_JiConf("Confirmed");
                      } else if (pandit_JiConf == "Confirmed") {
                        setPandit_JiConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {pandit_JiConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={pandit_JiReas}
                    onChange={(e) => {
                      setPandit_JiReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (pandit_Jistats == "pending") {
                        setPandit_Jistats("Completed");
                      } else if (pandit_Jistats == "Completed") {
                        setPandit_Jistats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {pandit_Jistats}
                  </div>
                </td>
              </tr>
            )}
            {!!mehandi && (
              <tr>
                <th>Mehandi</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    value={mehandiPromiseDat}
                    onChange={(e) => {
                      setMehandiPromiseDate(e.target.value);
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
                      if (mehandiConf == "Not Confirmed") {
                        setMehandiConf("Confirmed");
                      } else if (mehandiConf == "Confirmed") {
                        setMehandiConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {mehandiConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={mehandiReas}
                    onChange={(e) => {
                      setMehandiReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (mehandistats == "pending") {
                        setMehandistats("Completed");
                      } else if (mehandistats == "Completed") {
                        setMehandistats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {mehandistats}
                  </div>
                </td>
              </tr>
            )}
            {!!hosting && (
              <tr>
                <th>Hosting</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    value={hostingPromiseDat}
                    onChange={(e) => {
                      setHostingPromiseDate(e.target.value);
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
                      if (hostingConf == "Not Confirmed") {
                        setHostingConf("Confirmed");
                      } else if (hostingConf == "Confirmed") {
                        setHostingConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {hostingConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={hostingReas}
                    onChange={(e) => {
                      setHostingReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (hostingstats == "pending") {
                        setHostingstats("Completed");
                      } else if (hostingstats == "Completed") {
                        setHostingstats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {hostingstats}
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
              <div>&nbsp;&nbsp;&nbsp;</div>
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
              <th>Regular Decoration</th>
              <td>{forms[0].Decoration.RegularDecoration}</td>
            </tr>
            <tr>
              <th>Theme Decoration</th>
              <td>{forms[0].Decoration.ThemeDecoration}</td>
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
              <th>Number Of Guests</th>
              <td>{forms[0].NoOfGuests}</td>
            </tr>
            <tr>
              <th>Invitation</th>
              <td>{forms[0].OtherServiceValues.invitation}</td>
            </tr>
            <tr>
              <th>Mehandi </th>
              <td>{forms[0].OtherServiceValues.mehandi}</td>
            </tr>
            <tr>
              <th>Venue One Name</th>
              <td>{forms[0].OtherServiceValues.venues.venue1.name}</td>
            </tr>
            <tr>
              <th>Venue One Place</th>
              <td>{forms[0].OtherServiceValues.venues.venue1.place}</td>
            </tr>
            <tr>
              <th>Venue two Name</th>
              <td>{forms[0].OtherServiceValues.venues.venue2.name}</td>
            </tr>
            <tr>
              <th>Venue two Place</th>
              <td>{forms[0].OtherServiceValues.venues.venue2.place}</td>
            </tr>
            <tr>
              <th>Venue three Name</th>
              <td>{forms[0].OtherServiceValues.venues.venue3.name}</td>
            </tr>
            <tr>
              <th>Venue three Place</th>
              <td>{forms[0].OtherServiceValues.venues.venue3.place}</td>
            </tr>
            <tr>
              <th>Other Services</th>
              <td>{forms[0].OtherServices[0]}</td>
            </tr>
            <tr>
              <th>Other Services</th>
              <td>{forms[0].OtherServices[1]}</td>
            </tr>
            <tr>
              <th>Other Services</th>
              <td>{forms[0].OtherServices[2]}</td>
            </tr>
            <tr>
              <th>Other Services</th>
              <td>{forms[0].OtherServices[3]}</td>
            </tr>
            <tr>
              <th>Other Services</th>
              <td>{forms[0].OtherServices[4]}</td>
            </tr>
            <tr>
              <th>Other Services</th>
              <td>{forms[0].OtherServices[5]}</td>
            </tr>
            <tr>
              <th>Other Services</th>
              <td>{forms[0].OtherServices[6]}</td>
            </tr>
            <tr>
              <th>Mehandi </th>
              <td>{forms[0].OtherServiceValues.Mehandi}</td>
            </tr>
            <tr>
              <th>Beauty </th>
              <td>{forms[0].OtherServiceValues.Beauty}</td>
            </tr>
            <tr>
              <th>Dance</th>
              <td>{forms[0].Shows.dancevalues}</td>
            </tr>
            <tr>
              <th>Dj</th>
              <td>{forms[0].Shows.dj}</td>
            </tr>
            <tr>
              <th>music</th>
              <td>{forms[0].Shows.musicvalues}</td>
            </tr>
            <tr>
              <th>Shows</th>
              <td>{forms[0].Shows.show[0]}</td>
            </tr>
            <tr>
              <th>Shows</th>
              <td>{forms[0].Shows.show[1]}</td>
            </tr>
            <tr>
              <th>Shows</th>
              <td>{forms[0].Shows.show[2]}</td>
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
          <AdminInvoice
            ordId={forms[0].orderId}
            details={invocDetails}
            updateInvoiceDetails={updateInvoiceDetails}
          />
        )}
      </div>
    </div>
  );
}

export default Orderslist;
