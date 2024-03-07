import "./App.css";
import React from "react";
import { HeaderNav } from "./react-components/header/header.tsx";
import Footer from "./react-components/footer/footer.tsx";
import Homepage from "./react-components/homepage/homepage.tsx";
import { Routes, Route } from "react-router-dom";
import ReservationRev from "./react-components/ReservationReview/ReservationRev.tsx";
import Login from "./react-components/SignUp/Registration/Login.tsx";
import Signup from "./react-components/SignUp/Registration/Signup.tsx";

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Sign-in" element={< Login/>}></Route>
        <Route path="/Sign-up" element={< Signup/>}></Route>
        <Route path="/reservation-details" element={< ReservationRev/>}></Route>

        {/* <Route path="/Guest-reservation" element={</>}></Route> componant havent been created yet  */}


      </Routes>
      <Footer />
    </>
  );
}

export default App;
