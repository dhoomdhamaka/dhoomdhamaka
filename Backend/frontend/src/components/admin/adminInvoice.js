import axios from "axios";
import React, { useEffect, useState } from "react";

function AdminInvoice(props) {
  const [details, setDetails] = useState();
  const [showTb, setShowTb] = useState(false);

  const [shows, setShows] = useState(null);
  const [decoration, setDecoration] = useState(null);
  const [catering, setCatering] = useState(null);
  const [invitaion, setInvitaion] = useState(null);
  const [photography, setPhotography] = useState(null);
  const [beauty, setBeauty] = useState(null);
  const [mehandi, setMehandi] = useState(null);
  const [panditJi, setPanditJi] = useState(null);
  const [venue, setVenue] = useState(null);
  const [muhDikhai, setMuhDikhai] = useState(null);
  const [hosting, setHosting] = useState(null);
  const [subharambh, setSubharambh] = useState(null);
  const [honeymoon, setHoneymoon] = useState(null);
  const [shooting, setShooting] = useState(null);
  const [bachelorParty, setBachelorParty] = useState(null);
  const [weddingType, setWeddingType] = useState(null);
  const [addtional, setAddtional] = useState(null);
  const [emergency, setEmergency] = useState(null);
  const [premium, setPremium] = useState(null);

  //   const []

  const [updtBtnInvoice, setUpdtBtnInvoice] = useState(true);

  useEffect(() => {
    if (props.details.shows != undefined) {
      setShows(props.details.shows);
    }
    if (props.details.decoration != undefined) {
      setDecoration(props.details.decoration);
    }
    if (props.details.catering != undefined) {
      setCatering(props.details.catering);
    }
    if (props.details.invitaion != undefined) {
      setInvitaion(props.details.invitaion);
    }
    if (props.details.photography != undefined) {
      setPhotography(props.details.photography);
    }
    if (props.details.beauty != undefined) {
      setBeauty(props.details.beauty);
    }
    if (props.details.mehandi != undefined) {
      setMehandi(props.details.mehandi);
    }
    if (props.details.panditJi != undefined) {
      setPanditJi(props.details.panditJi);
    }
    if (props.details.muhDikhai != undefined) {
      setMuhDikhai(props.details.mehandi);
    }
    if (props.details.venue != undefined) {
      setVenue(props.details.venue);
    }
    if (props.details.hosting != undefined) {
      setHosting(props.details.hosting);
    }
    if (props.details.shooting != undefined) {
      setShooting(props.details.shooting);
    }
    if (props.details.honeymoon != undefined) {
      setHoneymoon(props.details.honeymoon);
    }
    if (props.details.bachelorParty != undefined) {
      setBachelorParty(props.details.bachelorParty);
    }
    if (props.details.subharambh != undefined) {
      setSubharambh(props.details.subharambh);
    }
    if (props.details.weddingType != undefined) {
      setWeddingType(props.details.weddingType);
    }
    if (props.details.premium != undefined) {
      setPremium(props.details.premium);
    }
    if (props.details.emergency != undefined) {
      setEmergency(props.details.emergency);
    }
    if (props.details.addtional != undefined) {
      setAddtional(props.details.addtional);
    }
    setShowTb(true);
  }, []);

  function updateInvoiceDetails() {
    const invoiceDet = {
      orderId: props.ordId,
      shows,
      decoration,
      catering,
      invitaion,
      photography,
      beauty,
      mehandi,
      panditJi,
      venue,
      muhDikhai,
      subharambh,
      honeymoon,
      hosting,
      shooting,
      bachelorParty,
      weddingType,
      addtional,
      premium,
      emergency,
    };
    props.updateInvoiceDetails(invoiceDet);
  }

  return (
    <div>
      {!!showTb && (
        <div>
          <h1 className="fw-bolder mb-3">Invoice</h1>
          <table className="table bg-white rounded shadow-sm text-center">
            <thead>
              <tr>
                <th className="fw-bolder">Description</th>
                <th className="fw-bolder">Amount</th>
              </tr>
            </thead>
            <tbody>
              {shows != null && (
                <tr>
                  <td>Shows</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={shows}
                          onChange={(e) => {
                            setShows(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {decoration != null && (
                <tr>
                  <td>Decoration</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={decoration}
                          onChange={(e) => {
                            setDecoration(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {invitaion != null && (
                <tr>
                  <td>Invitation</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={invitaion}
                          onChange={(e) => {
                            setInvitaion(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {beauty != null && (
                <tr>
                  <td>Beauty</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={beauty}
                          onChange={(e) => {
                            setBeauty(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {catering != null && (
                <tr>
                  <td>Catering</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={catering}
                          onChange={(e) => {
                            setCatering(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {venue != null && (
                <tr>
                  <td>Venue</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={venue}
                          onChange={(e) => {
                            setVenue(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {weddingType != null && (
                <tr>
                  <td>WeddingType</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={weddingType}
                          onChange={(e) => {
                            setWeddingType(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {mehandi != null && (
                <tr>
                  <td>Mehandi</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={mehandi}
                          onChange={(e) => {
                            setMehandi(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {panditJi != null && (
                <tr>
                  <td>Pandit Ji</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={panditJi}
                          onChange={(e) => {
                            setPanditJi(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {muhDikhai != null && (
                <tr>
                  <td>Muh Dikhai</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={muhDikhai}
                          onChange={(e) => {
                            setMuhDikhai(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {subharambh != null && (
                <tr>
                  <td>Subharambh Yatra</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={subharambh}
                          onChange={(e) => {
                            setSubharambh(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {hosting != null && (
                <tr>
                  <td>Hosting</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={hosting}
                          onChange={(e) => {
                            setHosting(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {shooting != null && (
                <tr>
                  <td>Shooting</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={shooting}
                          onChange={(e) => {
                            setShooting(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {bachelorParty != null && (
                <tr>
                  <td>Bachelors Party</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={bachelorParty}
                          onChange={(e) => {
                            setBachelorParty(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {photography != null && (
                <tr>
                  <td>Photography</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={photography}
                          onChange={(e) => {
                            setPhotography(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {honeymoon != null && (
                <tr>
                  <td>Honeymoon</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={honeymoon}
                          onChange={(e) => {
                            setHoneymoon(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {premium != null && (
                <tr>
                  <td>Premium</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={premium}
                          onChange={(e) => {
                            setPremium(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {addtional != null && (
                <tr>
                  <td>Additional</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={addtional}
                          onChange={(e) => {
                            setAddtional(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {emergency != null && (
                <tr>
                  <td>Emergency Service</td>
                  <td className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={emergency}
                          onChange={(e) => {
                            setEmergency(e.target.value);
                            setUpdtBtnInvoice(false);
                          }}
                          type={"number"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
            {/* <tfoot> */}
            <tr rowspan="5" className="text-start">
              <th></th>
              {/* <th></th> */}
              <button
                type="button"
                onClick={() => updateInvoiceDetails()}
                className="my-3 btn btn-success"
                disabled={updtBtnInvoice}
              >
                Update
              </button>
            </tr>
            {/* </tfoot> */}
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminInvoice;
