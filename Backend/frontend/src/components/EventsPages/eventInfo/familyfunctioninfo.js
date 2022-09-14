import React from "react";
import axios from "axios";

function Familyfunctioninfo(props) {
  const personalfamily = props.personalfamily;
  const familyfunction = props.familyfunction && props.familyfunction;
  const name = props.name;

  function refreshPage() {
    axios.post(
      `api/eventInfo/familyfunctioncancel/${props.personalfamily.orderId}`
    );

    window.location.reload();
  }
  console.log("vanthutu", props.familyfunction);
  return (
    props.familyfunction && (
      <>
        <div style={{ minHeight: "100vh" }}>
          <div className="container">
          <h3
              className=" text-center fw-bold mb-2"
              style={{ fontVariant: "small-caps", display: "block" }}
            >
              {props.personalfamily.eventName} - [ {props.personalfamily.date} ]
            </h3>

            <h5 className="text-center fw-bold text-muted mb-3">
              Order ID -{" "}
              <span className="fs-6" style={{ color: "limegreen" }}>
                [ {props.personalfamily.orderId} ]
              </span>
            </h5>
            <div className="row justify-content-center mx-4">
              <div className="col-md-8">
                <table class="table bg-white shadow-3-strong p-5">
                  <tbody>
                    {/* <tr>
        <th scope="row" className="fw-bold">Groom Name</th>
        <td colspan="2">{props.personalfamily.GroomName}</td>
        
      </tr> */}
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
                      <td>{props.personalfamily.eventName}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Order Id
                      </th>
                      <td>{props.personalfamily.orderId}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Date of event
                      </th>
                      <td colspan="2">{props.personalfamily.FromDate}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Date of Booking
                      </th>
                      <td colspan="2">{props.personalfamily.createdAt}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        No of Guests
                      </th>
                      <td colspan="2">{props.personalfamily.NoOfGuests}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="my-5" />
          <div>
            
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
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
                    {props.familyfunction.invitationReason && (
                      <tr>
                        <th>Invitation</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.familyfunction.invitationPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.familyfunction.invitationService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.familyfunction.invitationReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.familyfunction.invitationStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.familyfunction.cateringReason && (
                      <tr>
                        <th>Catering</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.familyfunction.cateringPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.familyfunction.cateringService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.familyfunction.cateringReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.familyfunction.cateringStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.familyfunction.beautyReason && (
                      <tr>
                        <th>Beauty </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.familyfunction.beautyPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.familyfunction.beautyService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.familyfunction.beautyReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.familyfunction.beautyStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.familyfunction.venueReason && (
                      <tr>
                        <th>Venue </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.familyfunction.venuePromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.familyfunction.venueService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.familyfunction.venueReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.familyfunction.venueStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.familyfunction.showsReason && (
                      <tr>
                        <th>Show </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.familyfunction.showsPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.familyfunction.showsService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.familyfunction.showsReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.familyfunction.showsStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.familyfunction.photographyReason && (
                      <tr>
                        <th>Photography </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.familyfunction.photographyPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.familyfunction.photographyService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.familyfunction.photographyReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.familyfunction.photographyStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.familyfunction.decorationReason && (
                      <tr>
                        <th>Decoration </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.familyfunction.decorationPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.familyfunction.decorationService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.familyfunction.decorationReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.familyfunction.decorationStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.familyfunction.pandit_JiReason && (
                      <tr>
                        <th>pandit_Ji </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.familyfunction.pandit_JiPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.familyfunction.pandit_JiService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.familyfunction.pandit_JiReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.familyfunction.pandit_JiStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.familyfunction.mehandiReason && (
                      <tr>
                        <th>Mehandi </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.familyfunction.mehandiPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.familyfunction.mehandiService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.familyfunction.mehandiReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.familyfunction.mehandiStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.familyfunction.hostingReason && (
                      <tr>
                        <th>Hosting </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.familyfunction.hostingPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.familyfunction.hostingService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.familyfunction.hostingReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.familyfunction.hostingStatus}
                          </div>
                        </td>
                      </tr>
                    )}

                    {props.familyfunction.AdditionalReason && (
                      <tr>
                        <th>Additional Service</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.familyfunction.AdditionalPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.familyfunction.AdditionalService}
                          </div>
                        </td>
                        <td className="text-justify">
                          <textarea
                            // type={"text"}
                            value={props.familyfunction.AdditionalReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.familyfunction.AdditionalStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {!props.personalfamily.cancelrequest && (
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

                {props.personalfamily.cancelrequest && (
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
                                {props.personalfamily.cancelstatus}
                              </td>
                            </tr>
                            {props.personalfamily.canceled && (
                              <tr>
                                <th scope="row" className="fw-bold">
                                  Refund Amount
                                </th>
                                <td colspan="2">
                                  {props.personalfamily.refund}
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
        <hr  className="my-4"/>
      </>
    )

    //
  );
}

export default Familyfunctioninfo;
