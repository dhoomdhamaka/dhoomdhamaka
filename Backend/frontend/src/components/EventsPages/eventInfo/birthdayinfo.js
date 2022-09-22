import React from "react";
import axios from "axios";

export function Birthdayinfo(props) {
  const personalbirthday = props.personalbirthday;
  const birthday = props.birthday && props.birthday;
  const name = props.name;

  function refreshPage() {
    axios.post(
      `api/eventInfo/birthdaycancel/${props.personalbirthday.orderId}`
    );
    window.location.reload();
  }

  return (
    props.birthday && (
      <>
        <div style={{ minHeight: "100vh" }}>
          <div className="container">
            <h3
              className=" text-center fw-bold mb-2"
              style={{ fontVariant: "small-caps", display: "block" }}
            >
              {props.personalbirthday.eventName} - [{" "}
              {props.personalbirthday.date} ]
            </h3>

            <h5 className="text-center fw-bold text-muted mb-3">
              Order ID -{" "}
              <span className="fs-6" style={{ color: "limegreen" }}>
                [ {props.personalbirthday.orderId} ]
              </span>
            </h5>
            <div className="row justify-content-center mx-4">
              <div className="col-md-6">
                <table class="table shadow-3-strong p-5 bg-white">
                  <tbody className="borderless">
                    <tr>
                      <th scope="row" className="fw-bold">
                        Birthday Name
                      </th>
                      <td colspan="2">
                        {props.personalbirthday.BirthdayPersonName}
                      </td>
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
                      <td>{props.personalbirthday.eventName}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Order Id
                      </th>
                      <td>{props.personalbirthday.orderId}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Date of event
                      </th>
                      <td colspan="2">{props.personalbirthday.date}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Date of Booking
                      </th>
                      <td colspan="2">{props.personalbirthday.createdAt}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        No of Guests
                      </th>
                      <td colspan="2">{props.personalbirthday.NoOfGuests}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="my-5" />
          <div>
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
                    {props.birthday.invitationReason && (
                      <tr>
                        <th>Invitation</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.birthday.invitationPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.birthday.invitationService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.birthday.invitationReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.birthday.invitationStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.birthday.cateringReason && (
                      <tr>
                        <th>Catering</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.birthday.cateringPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.birthday.cateringService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.birthday.cateringReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.birthday.cateringStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.birthday.beautyReason && (
                      <tr>
                        <th>Beauty </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.birthday.beautyPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.birthday.beautyService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.birthday.beautyReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.birthday.beautyStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.birthday.venueReason && (
                      <tr>
                        <th>Venue </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.birthday.venuePromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.birthday.venueService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.birthday.venueReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.birthday.venueStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.birthday.showsReason && (
                      <tr>
                        <th>Show </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.birthday.showsPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.birthday.showsService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.birthday.showsReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.birthday.showsStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.birthday.photographyReason && (
                      <tr>
                        <th>Photography </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.birthday.photographyPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.birthday.photographyService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.birthday.photographyReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.birthday.photographyStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.birthday.decorationReason && (
                      <tr>
                        <th>Decoration </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.birthday.decorationPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.birthday.decorationService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.birthday.decorationReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.birthday.decorationStatus}
                          </div>
                        </td>
                      </tr>
                    )}

                    {props.birthday.AdditionalReason && (
                      <tr>
                        <th>Additional Service</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.birthday.AdditionalPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.birthday.AdditionalService}
                          </div>
                        </td>
                        <td className="text-justify">
                          <textarea
                            // type={"text"}
                            value={props.birthday.AdditionalReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.birthday.AdditionalStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {!props.personalbirthday.cancelrequest && (
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

                {props.personalbirthday.cancelrequest && (
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
                                {props.personalbirthday.cancelstatus}
                              </td>
                            </tr>
                            {props.personalbirthday.canceled && (
                              <tr>
                                <th scope="row" className="fw-bold">
                                  Refund Amount
                                </th>
                                <td colspan="2">
                                  {props.personalbirthday.refund}
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
        <hr className="my-5" />
      </>
    )

    //
  );
}
