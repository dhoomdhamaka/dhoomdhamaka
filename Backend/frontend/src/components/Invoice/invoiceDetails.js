import axios from "axios";
import React, { useEffect, useState } from "react";

function InvoiceDetails(props) {

    const [totalCharge, setTotalCh] = useState("NA")

    const dat = props.data

    // useEffect(()=>{
        axios.get(`api/payment/getByOrderId/${props.data.orderId}`).then((res) => {
          // console.log(res.data[0].eventCharge)
            if (res.status === 200) {
              if(res.data[0].eventCharge != undefined){

                setTotalCh(res.data[0].eventCharge);
              }else{
                setTotalCh(0);

              }
            }
          })
    // },[])

  return (
    <div>
      <div className="row justify-content-center my-5">
        <div className="col-md-8 my-5">
          <div class="card">
            <div class="card-header bg-black"></div>
            <div class="card-body">
              <div class="container">
                <div class="row">
                <div class="col-xl-12 mt-3">
                  {/* <i class="far fa-building text-danger fa-6x float-start"></i> */}
                  <h2 className="fw-bolder fs-2" style={{fontVariant:"small-caps"}}>Dhoom Dhamaka</h2>
                </div>
              </div>

              <div class="row mb-5">
                <div class="col-xl-12">
                  <ul class="list-unstyled float-end">
                    <li className="fw-bolder" style={{ fontSize: "30px", color: "red" }}>Details</li>
                    <li className="fw-bold ms-3">{dat.userName}</li>
                    <li className="fw-bold ms-3">{dat.eventName}</li>
                    <li className="fw-bold ms-3">{dat.date}</li>
                  </ul>
                </div>
              </div>

                <div class="row text-center">
                  <h3
                    class="text-uppercase fw-bolder text-center mt-3"
                    style={{ fontSize: "40px" }}
                  >
                    Invoice
                  </h3>
                  <p className="fw-bold">{dat.orderId}</p>
                </div>

                <div class="row mx-3">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" className="fw-bold">Description</th>
                        <th scope="col" className="fw-bold">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dat.shows != undefined && <tr>
                        <td>Shows</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.shows}
                        </td>
                      </tr>}
                      {dat.decoration != undefined && <tr>
                        <td>Decoration</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.decoration}
                        </td>
                      </tr>}
                      {dat.invitaion != undefined && <tr>
                        <td>Invitation</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.invitaion}
                        </td>
                      </tr>}
                      {dat.venue != undefined && <tr>
                        <td>Venue</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.venue}
                        </td>
                      </tr>}
                      {dat.photography != undefined && <tr>
                        <td>Photography</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.photography}
                        </td>
                      </tr>}
                      {dat.mehandi != undefined && <tr>
                        <td>Mehandi</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.mehandi}
                        </td>
                      </tr>}
                      {dat.panditJi != undefined && <tr>
                        <td>Pandit Ji</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.panditJi}
                        </td>
                      </tr>}
                      {dat.beauty != undefined && <tr>
                        <td>Beauty</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.beauty}
                        </td>
                      </tr>}
                      {dat.muhDikhai != undefined && <tr>
                        <td>Muh Dikhai</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.muhDikhai}
                        </td>
                      </tr>}
                      {dat.subharambh != undefined && <tr>
                        <td>Subharambh Yatra</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.subharambh}
                        </td>
                      </tr>}
                      {dat.honeymoon != undefined && <tr>
                        <td>Honeymoon</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.honeymoon}
                        </td>
                      </tr>}
                      {dat.shooting != undefined && <tr>
                        <td>Shooting</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.shooting}
                        </td>
                      </tr>}
                      {dat.bachelorParty != undefined && <tr>
                        <td>Bachelors Party</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.bachelorParty}
                        </td>
                      </tr>}
                      {dat.hosting != undefined && <tr>
                        <td>Hosting</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.hosting}
                        </td>
                      </tr>}
                      {dat.weddingType != undefined && <tr>
                        <td>Wedding Type</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.weddingType}
                        </td>
                      </tr>}
                      {dat.catering != undefined && <tr>
                        <td>Catering</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.catering}
                        </td>
                      </tr>}
                      {dat.addtional != undefined && <tr>
                        <td>Additional</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.addtional}
                        </td>
                      </tr>}
                      {dat.emergency != undefined && <tr>
                        <td>Emergency</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.emergency}
                        </td>
                      </tr>}
                      {dat.premium != undefined && <tr>
                        <td>Premium</td>
                        <td>
                          <i class="fas fa-rupee-sign"></i> {dat.premium}
                        </td>
                      </tr>}
                      </tbody>
                  </table>
                </div>
                {/* <div class="row">
                  <div class="col-xl-8">
                    <ul class="list-unstyled float-end me-0">
                      <li>
                        <span class="me-3 float-start">Total Amount:</span>
                        <i class="fas fa-dollar-sign"></i> 6850,00
                      </li>
                      <li>
                        {" "}
                        <span class="me-5">Discount:</span>
                        <i class="fas fa-dollar-sign"></i> 500,00
                      </li>
                      <li>
                        <span
                          class="float-start"
                          style={{ marginRight: "35px" }}
                        >
                          Shippment:{" "}
                        </span>
                        <i class="fas fa-dollar-sign"></i> 500,00
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* <hr /> */}
                <div class="row">
                  <div class="col-xl-8" style={{ marginLeft: "60px" }}>
                    <p
                      class="float-end"
                      style={{
                        fontSize: "30px",
                        color: "red",
                        fontWeight: "400",
                        fontFamily: "Arial, Helvetica, sans-serif",
                      }}
                    >
                      Total:
                      <span>
                        <i class="fas fa-dollar-sign"></i> {totalCharge}
                      </span>
                    </p>
                  </div>
                </div>

                <div class="row mt-4 mb-2">
                  <p class="fw-bold text-center">
                    <span class="text-muted">Digitally verified by <span className="fw-bolder">Dhoom Dhamaka</span> </span>
                  </p>
                  {/* <p class="fw-bold mt-3">Signature:</p> */}
                </div>
              </div>
            </div>
            <div class="card-footer bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetails;