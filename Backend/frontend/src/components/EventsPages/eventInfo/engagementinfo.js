import React from "react";
import axios from "axios";

export function Engagementinfo(props) {
  const personalengagement = props.personalengagement;
  const engagement = props.engagement && props.engagement;
  const name = props.name;

  function refreshPage() {
    axios.post(
      `api/eventInfo/engagementcancel/${props.personalengagement.orderId}`
    );

    window.location.reload();
  }
  console.log("vanthutu", props.engagement);
  return (
    props.engagement && (
      <>
        <div style={{ minHeight: "100vh" }}>
          <div className="container">
            <h3
              className=" text-center fw-bold mb-2"
              style={{ fontVariant: "small-caps", display: "block" }}
            >
              {props.personalengagement.eventName} - [{" "}
              {props.personalengagement.date} ]
            </h3>

            <h5 className="text-center fw-bold text-muted mb-3">
              Order ID -{" "}
              <span className="fs-6" style={{ color: "limegreen" }}>
                [ {props.personalengagement.orderId} ]
              </span>
            </h5>
            <div className="row justify-content-center mx-4">
              <div className="col-md-8">
                <table class="table bg-white shadow-3-strong p-5">
                  <tbody>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Bride Name
                      </th>
                      <td colspan="2">{props.personalengagement.BrideName}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Groom Name
                      </th>
                      <td colspan="2">{props.personalengagement.GroomName}</td>
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
                      <td>{props.personalengagement.eventName}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Order Id
                      </th>
                      <td>{props.personalengagement.orderId}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Date of event
                      </th>
                      <td colspan="2">{props.personalengagement.date}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Date of Booking
                      </th>
                      <td colspan="2">{props.personalengagement.createdAt}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        No of Guests
                      </th>
                      <td colspan="2">{props.personalengagement.NoOfGuests}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="my-5" />
          <div>
            <div className="row justify-content-center mx-2">
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
                    {props.engagement.invitationReason && (
                      <tr>
                        <th>Invitation</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.engagement.invitationPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.engagement.invitationService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.engagement.invitationReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.engagement.invitationStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.engagement.cateringReason && (
                      <tr>
                        <th>Catering</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.engagement.cateringPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.engagement.cateringService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.engagement.cateringReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.engagement.cateringStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.engagement.beautyReason && (
                      <tr>
                        <th>Beauty </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.engagement.beautyPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.engagement.beautyService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.engagement.beautyReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.engagement.beautyStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.engagement.venueReason && (
                      <tr>
                        <th>Venue </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.engagement.venuePromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.engagement.venueService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.engagement.venueReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.engagement.venueStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.engagement.showsReason && (
                      <tr>
                        <th>Show </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.engagement.showsPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.engagement.showsService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.engagement.showsReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.engagement.showsStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.engagement.photographyReason && (
                      <tr>
                        <th>Photography </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.engagement.photographyPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.engagement.photographyService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.engagement.photographyReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.engagement.photographyStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.engagement.decorationReason && (
                      <tr>
                        <th>Decoration </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.engagement.decorationPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.engagement.decorationService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.engagement.decorationReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.engagement.decorationStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.engagement.pandit_JiReason && (
                      <tr>
                        <th>pandit_Ji </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.engagement.pandit_JiPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.engagement.pandit_JiService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.engagement.pandit_JiReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.engagement.pandit_JiStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.engagement.mehandiReason && (
                      <tr>
                        <th>Mehandi </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.engagement.mehandiPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.engagement.mehandiService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.engagement.mehandiReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.engagement.mehandiStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.engagement.hostingReason && (
                      <tr>
                        <th>Hosting </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.engagement.hostingPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.engagement.hostingService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.engagement.hostingReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.engagement.hostingStatus}
                          </div>
                        </td>
                      </tr>
                    )}

                    {props.engagement.AdditionalReason && (
                      <tr>
                        <th>Additional Service</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.engagement.AdditionalPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.engagement.AdditionalService}
                          </div>
                        </td>
                        <td className="text-justify">
                          <textarea
                            // type={"text"}
                            value={props.engagement.AdditionalReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.engagement.AdditionalStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {!props.personalengagement.cancelrequest && (
                  <div className="row  col-md-3 text-left">
                    {/* <button type="button" class="btn btn-danger " onClick={ refreshPage } >Cancel Order</button> */}

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

                {props.personalengagement.cancelrequest && (
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
                                {props.personalengagement.cancelstatus}
                              </td>
                            </tr>
                            {props.personalengagement.canceled && (
                              <tr>
                                <th scope="row" className="fw-bold">
                                  Refund Amount
                                </th>
                                <td colspan="2">
                                  {props.personalengagement.refund}
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
