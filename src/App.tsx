import "./App.css";
import React from "react";
import { HeaderNav } from "./react-components/header/header.tsx";
import Footer from "./react-components/footer/footer.tsx";
import Homepage from "./react-components/homepage/homepage.tsx";
import { Routes, Route } from "react-router-dom";
import ReservationRev from "./react-components/ReservationReview/ReservationRev.tsx";

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/reservation" element={<ReservationRev/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
