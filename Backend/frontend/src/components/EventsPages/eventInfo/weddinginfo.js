import React from "react";
import axios from "axios";

export function Weddinginfo(props) {
  const personalwedding = props.personalwedding;
  const wedding = props.wedding && props.wedding;
  const name = props.name;

  function refreshPage() {
    axios.post(`api/eventInfo/weddingcancel/${props.personalwedding.orderId}`);

    window.location.reload();
  }
  console.log("vanthutu", props.wedding);
  return (
    props.wedding && (
      <>
        <div style={{ minHeight: "100vh" }}>
          <div className="container">
          <h3
              className=" text-center fw-bold mb-2"
              style={{ fontVariant: "small-caps", display: "block" }}
            >
              {props.personalwedding.eventName} - [ {props.personalwedding.date}{" "}
              ]
            </h3>

            <h5 className="text-center fw-bold text-muted mb-3">
              Order ID -{" "}
              <span className="fs-6" style={{ color: "limegreen" }}>
                [ {props.personalwedding.orderId} ]
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
                      <td colspan="2">{props.personalwedding.BrideName}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Groom Name
                      </th>
                      <td colspan="2">{props.personalwedding.GroomName}</td>
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
                      <td>{props.personalwedding.eventName}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Order Id
                      </th>
                      <td>{props.personalwedding.orderId}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Date of event
                      </th>
                      <td colspan="2">{props.personalwedding.date}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        Date of Booking
                      </th>
                      <td colspan="2">{props.personalwedding.createdAt}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-bold">
                        No of Guests
                      </th>
                      <td colspan="2">{props.personalwedding.NoOfGuests}</td>
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
                    {props.wedding.invitationReason && (
                      <tr>
                        <th>Invitation</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.wedding.invitationPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.wedding.invitationService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.wedding.invitationReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.wedding.invitationStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.wedding.cateringReason && (
                      <tr>
                        <th>Catering</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.wedding.cateringPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.wedding.cateringService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.wedding.cateringReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.wedding.cateringStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.wedding.weddingTypeReason && (
                      <tr>
                        <th>Wedding Type</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.wedding.weddingTypePromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.wedding.weddingTypeService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.wedding.weddingTypeReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.wedding.weddingTypeStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.wedding.beautyReason && (
                      <tr>
                        <th>Beauty </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.wedding.beautyPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.wedding.beautyService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.wedding.beautyReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.wedding.beautyStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.wedding.venueReason && (
                      <tr>
                        <th>Venue </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.wedding.venuePromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.wedding.venueService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.wedding.venueReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.wedding.venueStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.wedding.showsReason && (
                      <tr>
                        <th>Show </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.wedding.showsPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.wedding.showsService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.wedding.showsReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.wedding.showsStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.wedding.photographyReason && (
                      <tr>
                        <th>Photography </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.wedding.photographyPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.wedding.photographyService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.wedding.photographyReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.wedding.photographyStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.wedding.decorationReason && (
                      <tr>
                        <th>Decoration </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.wedding.decorationPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.wedding.decorationService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.wedding.decorationReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.wedding.decorationStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.wedding.pandit_JiReason && (
                      <tr>
                        <th>pandit_Ji </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.wedding.pandit_JiPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.wedding.pandit_JiService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.wedding.pandit_JiReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.wedding.pandit_JiStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.wedding.mehandiReason && (
                      <tr>
                        <th>Mehandi </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.wedding.mehandiPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.wedding.mehandiService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.wedding.mehandiReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.wedding.mehandiStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                    {props.wedding.hostingReason && (
                      <tr>
                        <th>Hosting </th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.wedding.hostingPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.wedding.hostingService}
                          </div>
                        </td>
                        <td>
                          <textarea
                            // type={"text"}
                            value={props.wedding.hostingReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.wedding.hostingStatus}
                          </div>
                        </td>
                      </tr>
                    )}

                    {props.wedding.AdditionalReason && (
                      <tr>
                        <th>Additional Service</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={props.wedding.AdditionalPromiseDate}
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td>
                          <div
                            type="button"
                            className="btn btn-sm btn btn-info"
                          >
                            {props.wedding.AdditionalService}
                          </div>
                        </td>
                        <td className="text-justify">
                          <textarea
                            // type={"text"}
                            value={props.wedding.AdditionalReason}
                          />
                        </td>
                        <td>
                          <div type="button" className="btn btn-sm btn-info">
                            {props.wedding.AdditionalStatus}
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <table class="table align-middle mb-0 bg-white mb-8">
                  <thead>
                    <tr>
                      <th className=" fw-bold" scope="col">
                        Wedding Function
                      </th>
                      <th className=" fw-bold" scope="col">
                        Date
                      </th>
                      <th className=" fw-bold" scope="col">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.personalwedding.Services.includes("Mehandi") && (
                      <tr>
                        <th>Mehandi</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Mehandi
                                .DateMehandiShow
                            }
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Mehandi
                                .TimeMehandiShow
                            }
                            type={"time"}
                            className={"input-sm"}
                          />
                        </td>
                      </tr>
                    )}

                    {props.personalwedding.Services.includes("Sangeet") && (
                      <tr>
                        <th>Sangeet</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Sangeet
                                .DateSangeet
                            }
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Sangeet
                                .TimeSangeet
                            }
                            type={"time"}
                            className={"input-sm"}
                          />
                        </td>
                      </tr>
                    )}

                    {props.personalwedding.Services.includes("Pooja") && (
                      <tr>
                        <th>Pooja</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Pooja.DatePooja
                            }
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Pooja.TimePooja
                            }
                            type={"time"}
                            className={"input-sm"}
                          />
                        </td>
                      </tr>
                    )}

                    {props.personalwedding.Services.includes("Baraat") && (
                      <tr>
                        <th>Baraat</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Baraat
                                .DateBaraat
                            }
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Baraat
                                .TimeBaraat
                            }
                            type={"time"}
                            className={"input-sm"}
                          />
                        </td>
                      </tr>
                    )}

                    {props.personalwedding.Services.includes("Reception") && (
                      <tr>
                        <th>Reception</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Reception
                                .DateReception
                            }
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Reception
                                .TimeReception
                            }
                            type={"time"}
                            className={"input-sm"}
                          />
                        </td>
                      </tr>
                    )}

                    {props.personalwedding.Services.includes("Phera") && (
                      <tr>
                        <th>Phera</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Phera.DatePhera
                            }
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Phera.TimePhera
                            }
                            type={"time"}
                            className={"input-sm"}
                          />
                        </td>
                      </tr>
                    )}

                    {props.personalwedding.Services.includes("Tilak") && (
                      <tr>
                        <th>Tilak</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Tilak.dateTilak
                            }
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Tilak.TimeTilak
                            }
                            type={"time"}
                            className={"input-sm"}
                          />
                        </td>
                      </tr>
                    )}

                    {props.personalwedding.Services.includes("Haldi") && (
                      <tr>
                        <th>Haldi</th>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Haldi.DateHaldi
                            }
                            type={"date"}
                            className={"input-sm"}
                          />
                        </td>
                        <td className="text-start ps-0 ms-0 pe-5">
                          <input
                            value={
                              props.personalwedding.Servicevalue.Haldi.TimeHaldi
                            }
                            type={"time"}
                            className={"input-sm"}
                          />
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {!props.personalwedding.cancelrequest && (
                  <div className="row  col-md-3 text-left">
                    {/* <button type="button" class="btn btn-danger " 
                onClick={ refreshPage } >Cancel Order</button> */}
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

                {props.personalwedding.cancelrequest && (
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
                                {props.personalwedding.cancelstatus}
                              </td>
                            </tr>
                            {props.personalwedding.canceled && (
                              <tr>
                                <th scope="row" className="fw-bold">
                                  Refund Amount
                                </th>
                                <td colspan="2">
                                  {props.personalwedding.refund}
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
