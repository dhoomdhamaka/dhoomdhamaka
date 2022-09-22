import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/home/home";
import Termsandcondtions from "./components/home/termsandcondtions";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Passwordreset from "./components/passwordReset/passwordReset";
import NewPassword from "./components/newPassword/newPassword";
import Account from "./components/Myprofile/account";
// import Account from "./components/EventsPages/myprof";
import Events from "./components/Event/events";
import Becomevendor from "./components/BecomeVendor/becomevendor";
import Admin from "./components/admin/adminlogin";
import Admindashboard from "./components/admin/admindashboard";
import Birthday from "./components/EventsPages/birthday";
import Babyshower from "./components/EventsPages/babyshower";
import Corporateevent from "./components/EventsPages/corporateevent";
import Engagement from "./components/EventsPages/engagement";
import Familyfunction from "./components/EventsPages/familyfunction";
import Postwedding from "./components/EventsPages/postwedding";
import Prewedding from "./components/EventsPages/prewedding";
import Wedding from "./components/EventsPages/wedding";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import Emergency from "./components/emergencyform/emergencyform";
import Chat from "./components/chatbot/chat";
import PoojaGallery from "./components/serviceGallery/poojaGallery";
import PhotographyGallery from "./components/serviceGallery/photographyGallery";
import DecorationGallery from "./components/serviceGallery/decorationGallery";
import BeautyGallery from "./components/serviceGallery/beautyGallery";
import CateringGallery from "./components/serviceGallery/cateringGallery";
import Passwordresetsuccess from "./components/passwordReset/passwordresetsuccess";
import ScrollToTop from "./scrollToTop";
import Privacy from "./components/privacy/privacy";

function App() {
  const dispatch = useDispatch();
  if (localStorage.bandhanUserToken) {
    dispatch(authActions.login());
  }
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  let loginRoutes;

  if (isLoggedIn) {
    loginRoutes = (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/myacc" element={<Account />}></Route>
        <Route path="/birthday" element={<Birthday />}></Route>
        <Route path="/babyshower" element={<Babyshower />}></Route>
        <Route path="/corporateevents" element={<Corporateevent />}></Route>
        <Route path="/engagement" element={<Engagement />}></Route>
        <Route path="/familyfunction" element={<Familyfunction />}></Route>
        <Route path="/postwedding" element={<Postwedding />}></Route>
        <Route path="/prewedding" element={<Prewedding />}></Route>
        <Route path="/wedding" element={<Wedding />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/poojagallery" element={<PoojaGallery />}></Route>
        <Route
          path="/photographygallery"
          element={<PhotographyGallery />}
        ></Route>
        <Route path="/beautygallery" element={<BeautyGallery />}></Route>
        <Route
          path="/decorationgallery"
          element={<DecorationGallery />}
        ></Route>
        <Route path="/cateringgallery" element={<CateringGallery />}></Route>
        <Route path="/becomevendor" element={<Becomevendor />}></Route>
        <Route path="/emergencyform" element={<Emergency />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admindashboard" element={<Admindashboard />}></Route>
        <Route
          path="/passwordresetsuccess"
          element={<Passwordresetsuccess />}
        ></Route>
        <Route
          path="/termsandconditions"
          element={<Termsandcondtions />}
        ></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="*" element={<Events />}></Route>
      </Routes>
    );
  } else {
    loginRoutes = (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/passwordReset" element={<Passwordreset />}></Route>
        <Route path="/newPassword/:resetTok" element={<NewPassword />}></Route>
        <Route path="/becomevendor" element={<Becomevendor />}></Route>
        <Route
          path="/termsandcondtions"
          element={<Termsandcondtions />}
        ></Route>
        <Route
          path="/photographygallery"
          element={<PhotographyGallery />}
        ></Route>
        <Route path="/beautygallery" element={<BeautyGallery />}></Route>
        <Route
          path="/decorationgallery"
          element={<DecorationGallery />}
        ></Route>
        <Route path="/cateringgallery" element={<CateringGallery />}></Route>
        <Route path="/poojagallery" element={<PoojaGallery />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route
          path="/termsandconditions"
          element={<Termsandcondtions />}
        ></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        {/* <Route path="admindashboard" element={<Admindashboard />}></Route> */}
        <Route path="/poojagallery" element={<PoojaGallery />}></Route>
        <Route
          path="/passwordresetsuccess"
          element={<Passwordresetsuccess />}
        ></Route>
        <Route path="/*" element={<Login />}></Route>
      </Routes>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <ToastContainer />
        <Navbar />
        <main>{loginRoutes}</main>
        <Chat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
