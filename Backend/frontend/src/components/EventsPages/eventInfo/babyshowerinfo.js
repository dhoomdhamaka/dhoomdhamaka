import React, { useState } from "react";
import axios from "axios";
export function Babyshowerinfo(props) {
  const personalbabyshower = props.personalbabyshower;
  const babyshower = props.babyshower && props.babyshower;
  const name = props.name;

  function refreshPage() {
    axios.post(
      `api/eventInfo/babyshowercancel/${props.personalbabyshower.orderId}`
    );

    window.location.reload();
  }

  return (
    props.babyshower && (
      <>
        <div style={{ minHeight: "100vh" }}>
          <div className="container">
            <h3
              className=" text-center fw-bold mb-2"
              style={{ fontVariant: "small-caps", display: "block" }}
            >
              {props.personalbabyshower.eventName} - [{" "}
              {props.personalbabyshower.date} ]
            </h3>

            <h5 className="text-center fw-bold text-muted mb-3">
              Order ID -{" "}
              <span className="fs-6" style={{ color: "limegreen" }}>
                [ {props.personalbabyshower.orderId} ]
              </span>
            </h5>
            <div className="row justify-content-center">
              <div className="col-md-6 mx-4">
                <table class="table shadow-3-strong p-5 bg-white">
                  <tbody>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Mom Name
                      </th>
                      <td colspan="2">{props.personalbabyshower.MomName}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Dad Name
                      </th>
                      <td colspan="2">{props.personalbabyshower.DadName}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Name of the customer
                      </th>
                      <td>{props.name}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Event Name
                      </th>
                      <td>{props.personalbabyshower.eventName}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Order Id
                      </th>
                      <td>{props.personalbabyshower.orderId}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Date of event
                      </th>
                      <td colspan="2">{props.personalbabyshower.date}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Date of Booking
                      </th>
                      <td colspan="2">{props.personalbabyshower.createdAt}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        No of Guests
                      </th>
                      <td colspan="2">{props.personalbabyshower.NoOfGuests}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="my-5" />
          <div>
            <h3
              className=" text-center fw-bold mb-2"
              style={{ fontVariant: "small-caps", display: "block" }}
            >
              {props.personalbabyshower.eventName} - [{" "}
              {props.personalbabyshower.date} ]
            </h3>

            <h5 className="text-center fw-bold text-muted mb-3">
              Order ID -{" "}
              <span className="fs-6" style={{ color: "limegreen" }}>
                [ {props.personalbabyshower.orderId} ]
              </span>
            </h5>
            <div className="row justify-content-center">
              <div className="col-md-8 text-center table-responsive">
                <table class="table align-middle mb-0 bg-white mb-8">
                  <thead>
                    <tr>
                      <th className=" fw-bold" scope="col">
                        Event
                      </th>
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
                    {props.babyshower.invitationReason && (
                      <tr>
                        <th>Invitation</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.babyshower.invitationPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.babyshower.invitationService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.babyshower.invitationReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.babyshower.invitationStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.babyshower.cateringReason && (
                      <tr>
                        <th>Catering</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.babyshower.cateringPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.babyshower.cateringService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.babyshower.cateringReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.babyshower.cateringStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.babyshower.beautyReason && (
                      <tr>
                        <th>Beauty </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.babyshower.beautyPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.babyshower.beautyService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.babyshower.beautyReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.babyshower.beautyStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.babyshower.venueReason && (
                      <tr>
                        <th>Venue </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.babyshower.venuePromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.babyshower.venueService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.babyshower.venueReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.babyshower.venueStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.babyshower.showsReason && (
                      <tr>
                        <th>Show </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.babyshower.showsPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.babyshower.showsService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.babyshower.showsReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.babyshower.showsStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.babyshower.photographyReason && (
                      <tr>
                        <th>Photography </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.babyshower.photographyPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.babyshower.photographyService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.babyshower.photographyReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.babyshower.photographyStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.babyshower.decorationReason && (
                      <tr>
                        <th>Decoration </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.babyshower.decorationPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.babyshower.decorationService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.babyshower.decorationReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.babyshower.decorationStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.babyshower.pandit_JiReason && (
                      <tr>
                        <th>pandit_Ji </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.babyshower.pandit_JiPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.babyshower.pandit_JiService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.babyshower.pandit_JiReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.babyshower.pandit_JiStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.babyshower.mehandiReason && (
                      <tr>
                        <th>Mehandi </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.babyshower.mehandiPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.babyshower.mehandiService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.babyshower.mehandiReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.babyshower.mehandiStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.babyshower.hostingReason && (
                      <tr>
                        <th>Hosting </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.babyshower.hostingPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.babyshower.hostingService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.babyshower.hostingReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.babyshower.hostingStatus}
                          </div>
                        </td>
                      </tr>
                    )}

                    {props.babyshower.AdditionalReason && (
                      <tr>
                        <th>Additional Service</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.babyshower.AdditionalPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.babyshower.AdditionalService}
                          </div>
                        </td>
                        <td className="text-justify">
                          <textarea
                            // type={"text"}
                            value={props.babyshower.AdditionalReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.babyshower.AdditionalStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {!props.personalbabyshower.cancelrequest && (
                  <div className="row  col-md-3 text-left">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-mdb-toggle="modal"
                      data-mdb-target="#exampleModal"
                    >
                      Cancel Order
                    </button>
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
                            <h5
                              class="modal-title "
                              id="exampleModalLabel"
                            ></h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-mdb-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <h4>Are you sure want to cancel order</h4>
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
                              onClick={(val) => refreshPage()}
                            >
                              Proceed
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div class="my-5" />

                {props.personalbabyshower.cancelrequest && (
                  <div>
                    <div class="card w-75">
                      <div class="card-body">
                        <table class="table">
                          <tbody>
                            <tr>
                              <th scope="row" className="fw-bold">
                                Cancel Request
                              </th>
                              <td colspan="2">
                                {props.personalbabyshower.cancelstatus}
                              </td>
                            </tr>
                            {props.personalbabyshower.canceled && (
                              <tr>
                                <th scope="row" className="fw-bold">
                                  Refund Amount
                                </th>
                                <td colspan="2">
                                  {props.personalbabyshower.refund}
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
      </>
    )

    //
  );
}
