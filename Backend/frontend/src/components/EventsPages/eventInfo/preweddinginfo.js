import axios from "axios";
import React, { useEffect, useState } from "react";

export function Preweddinginfo(props) {
  const personalprewedding = props.personalprewedding;
  const prewedding = props.prewedding && props.prewedding;
  const name = props.name;

  function refreshPage() {
    axios.post(
      `api/eventInfo/preweddingcancel/${props.personalprewedding.orderId}`
    );

    window.location.reload();
  }
  return (
    props.prewedding && (
      <>
        <div style={{ minHeight: "100vh" }}>
          <div className="container">
            <h3
              className=" text-center fw-bold mb-2"
              style={{ fontVariant: "small-caps", display: "block" }}
            >
              {props.personalprewedding.eventName} - [{" "}
              {props.personalprewedding.date} ]
            </h3>

            <h5 className="text-center fw-bold text-muted mb-3">
              Order ID -{" "}
              <span className="fs-6" style={{ color: "limegreen" }}>
                [ {props.personalprewedding.orderId} ]
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
                      <td colspan="2">{props.personalprewedding.BrideName}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Groom Name
                      </th>
                      <td colspan="2">{props.personalprewedding.GroomName}</td>
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
                      <td>{props.personalprewedding.eventName}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Order Id
                      </th>
                      <td>{props.personalprewedding.orderId}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Date of event
                      </th>
                      <td colspan="2">{props.personalprewedding.date}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Date of Booking
                      </th>
                      <td colspan="2">{props.personalprewedding.createdAt}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="my-5" />
          <div>
            <div className="row justify-content-center mx-4">
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
                    {props.prewedding.ShootingReason && (
                      <tr>
                        <th>Shooting</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.prewedding.ShootingPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.prewedding.ShootingService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.prewedding.ShootingReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.prewedding.ShootingStatus}
                          </div>
                        </td>
                      </tr>
                    )}

                    {props.prewedding.cateringReason && (
                      <tr>
                        <th>Catering</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.prewedding.cateringPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.prewedding.cateringService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.prewedding.cateringReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.prewedding.cateringStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.prewedding.BachelorsPartyReason && (
                      <tr>
                        <th>BachelorsParty </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.prewedding.BachelorsPartyPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.prewedding.BachelorsPartyService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.prewedding.BachelorsPartyReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.prewedding.BachelorsPartyStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.prewedding.AdditionalReason && (
                      <tr>
                        <th>Additional Service</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.prewedding.AdditionalPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.prewedding.AdditionalService}
                          </div>
                        </td>
                        <td className="text-justify">
                          <textarea
                            // type={"text"}
                            value={props.prewedding.AdditionalReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.prewedding.AdditionalStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {!props.personalprewedding.cancelrequest && (
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

                {props.personalprewedding.cancelrequest && (
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
                                {props.personalprewedding.cancelstatus}
                              </td>
                            </tr>
                            {props.personalprewedding.canceled && (
                              <tr>
                                <th scope="row" className="fw-bold">
                                  Refund Amount
                                </th>
                                <td colspan="2">
                                  {props.personalprewedding.refund}
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
          <hr className="my-4" />
        </div>
      </>
    )

    //
  );
}

// export default Preweddinginfo
