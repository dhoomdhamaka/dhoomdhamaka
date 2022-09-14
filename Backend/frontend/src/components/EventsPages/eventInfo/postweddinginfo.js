import React from "react";
import axios from "axios";

export function Postweddinginfo(props) {
  const personalpostedding = props.personalpostedding;
  const postwedding = props.postwedding && props.postwedding;
  const name = props.name;

  function refreshPage() {
    axios.post(
      `api/eventInfo/postweddingcancel/${props.personalpostedding.orderId}`
    );

    window.location.reload();
  }
  console.log("vanthutu", props.postwedding);
  return (
    props.postwedding && (
      <>
        <div style={{ minHeight: "100vh" }}>
          <div className="container">
          <h3
              className=" text-center fw-bold mb-2"
              style={{ fontVariant: "small-caps", display: "block" }}
            >
              {props.personalpostedding.eventName} - [{" "}
              {props.personalpostedding.date} ]
            </h3>

            <h5 className="text-center fw-bold text-muted mb-3">
              Order ID -{" "}
              <span className="fs-6" style={{ color: "limegreen" }}>
                [ {props.personalpostedding.orderId} ]
              </span>
            </h5>
            <div className="row justify-content-center mx-4">
              <div className="col-md-8">
                <table class="table bg-white shadow-3-strong p-5">
                  <tbody>
                    {/* <tr>
        <th scope="row" className="fw-bold">Bride Name</th>
        <td colspan="2">{props.personalengagement.BrideName}</td>
        
      </tr>
      <tr>
        <th scope="row" className="fw-bold">Groom Name</th>
        <td colspan="2">{props.personalengagement.GroomName}</td>
        
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
                      <td>{props.personalpostedding.eventName}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Order Id
                      </th>
                      <td>{props.personalpostedding.orderId}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Date of event
                      </th>
                      <td colspan="2">{props.personalpostedding.date}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Date of Booking
                      </th>
                      <td colspan="2">{props.personalpostedding.createdAt}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        No of Guests
                      </th>
                      <td colspan="2">{props.personalpostedding.NoOfGuests}</td>
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
                    {props.postwedding.muh_DikhaiReason && (
                      <tr>
                        <th>muh Dikhai</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.postwedding.muh_DikhaiPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.postwedding.muh_DikhaiConfirmation}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.postwedding.muh_DikhaiReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.postwedding.muh_Dikhaistatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.postwedding.subaarambhYatraReason && (
                      <tr>
                        <th>subaarambhYatra</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.postwedding.subaarambhYatraPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.postwedding.subaarambhYatraConfirmation}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.postwedding.subaarambhYatraReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.postwedding.subaarambhYatrastatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.postwedding.honeymoonReason && (
                      <tr>
                        <th>Honeymoon </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.postwedding.honeymoonPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.postwedding.honeymoonConfirmation}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.postwedding.honeymoonReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.postwedding.honeymoonstatus}
                          </div>
                        </td>
                      </tr>
                    )}

                    {props.postwedding.AdditionalReason && (
                      <tr>
                        <th>Additional Service</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.postwedding.AdditionalPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.postwedding.AdditionalService}
                          </div>
                        </td>
                        <td className="text-justify">
                          <textarea
                            // type={"text"}
                            value={props.postwedding.AdditionalReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.postwedding.AdditionalStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                {!props.personalpostedding.cancelrequest && (
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

                {props.personalpostedding.cancelrequest && (
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
                                {props.personalpostedding.cancelstatus}
                              </td>
                            </tr>
                            {props.personalpostedding.canceled && (
                              <tr>
                                <th scope="row" className="fw-bold">
                                  Refund Amount
                                </th>
                                <td colspan="2">
                                  {props.personalpostedding.refund}
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
