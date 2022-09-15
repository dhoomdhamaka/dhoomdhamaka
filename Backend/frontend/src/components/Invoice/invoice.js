import axios from "axios";
import React, { useEffect, useState } from "react";
import { authActions } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InvoiceDetails from "./invoiceDetails";

function Invoice() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [InvoiceDatas, setInvoiceDatas] = useState([]);
  const [currentInvoc, setCurrentInvoc] = useState();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    function doLogout() {
      localStorage.clear("bandhanUserToken");
      dispatch(authActions.logout());
      navigate("/login");
      console.log("Succesfully logged out");
    }

    if (!!localStorage.getItem("bandhanUserToken")) {
      axios
        .get("api/login/getLoginStatus")
        .then((res) => {
          if (res.status === 200) {
            console.log("soop...");
          } else {
            doLogout();
          }
        })
        .catch((err) => {
          doLogout();
        });
    }
    axios.get("api/invoice/getUserOrders").then((res) => {
      if(res.status === 200){
        setInvoiceDatas(res.data);
      }
    });

    return () => {
      console.log('This will be logged on unmount');
    };
    
  }, []);
  // console.log(InvoiceDatas);
  
  async function detailsCall121(item) {
    setCurrentInvoc(item);
    setDisplay(true);
    // console.log(currentDetail);
   }

  return (
    <div className="mb-10 " style={{minHeight: "100vh"}} >
      <div className="row justify-content-center mx-5">
        {InvoiceDatas.map((item, i) => {
          return (
            <div className="col-md-4" key={i}>
              <div className="card rounded shadow-4-strong">
                <div className="card-body text-center">
                  <h3 className="mb-4 fw-bold">{item.eventName}</h3>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setDisplay(false)
                      detailsCall121(item)
                      }}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {display && <InvoiceDetails data={currentInvoc} />}
    </div>
  );
}

export default Invoice;