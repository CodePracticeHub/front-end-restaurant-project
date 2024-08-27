import "./App.css";
import React, { lazy, useEffect, Suspense } from "react";
import { HeaderNav } from "./react-components/header/header.tsx";
import Footer from "./react-components/footer/footer.tsx";
import Homepage from "./react-components/homepage/homepage.tsx";
import { Routes, Route, useLocation } from "react-router-dom";
// import ReservationRev from "./react-components/ReservationReview/ReservationRev.tsx";
import Login from "./react-components/SignUp/Registration/Login.tsx";
import Signup from "./react-components/SignUp/Registration/Signup.tsx";

import GuestReservation from "./react-components/Guest-Reserv/GuestReservation.jsx";
import { SpinnerLoading } from "./react-components/utils/SpinnerLoading.tsx";


const TopPage = () => import("./react-components/Top-and-Bottom-comp/TopPage.tsx")
const BottomPage = () => import("./react-components/Top-and-Bottom-comp/BottomPage.tsx")
const UserDashboard = lazy(()=> import("./react-components/User_Profile/User-dash/UserDashboard.tsx"))
const AccouInfo = lazy(()=> import("./react-components/User_Profile/Accountinformation/AccountInfo.tsx"))



function ReloadOnRouteChange() {
  const location = useLocation();
  useEffect(() => {}, [location.pathname]);
}
const changeH_F = (homeTag: React.JSX.Element, tag: React.JSX.Element) => {
  if (window.location.pathname === "/") {
    return homeTag;
  } else {
    return tag;
  }
};

function App() {
  ReloadOnRouteChange();
  return (
    <>
      {changeH_F(<HeaderNav />, <TopPage />)}
      <Suspense fallback={<SpinnerLoading errorDescription="Hold on please"/>}>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Sign-in" element={<Login />}></Route>
          <Route path="/Sign-up" element={<Signup />}></Route>
        {/* <Route path="/reservation-details" element={<ReservationRev />}></Route> On the work */}

          <Route path="/Guest-reservation" element={<GuestReservation/>}></Route> 
        
          <Route path="/dashboard" element={<UserDashboard/>}></Route>  
          <Route path="/dashboard/account-infos" element={<AccouInfo/>}></Route>    

        </Routes>
      </Suspense>

      {changeH_F(<Footer />, <BottomPage />)}

    </>
  );
}

export default App;
