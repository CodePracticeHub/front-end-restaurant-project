import "./App.css";
import React, { useEffect } from "react";
import { HeaderNav } from "./react-components/header/header.tsx";
import Footer from "./react-components/footer/footer.tsx";
import Homepage from "./react-components/homepage/homepage.tsx";
import { Routes, Route, useLocation } from "react-router-dom";
import ReservationRev from "./react-components/ReservationReview/ReservationRev.tsx";
import BottomPage from "./react-components/Top-and-Bottom-comp/BottomPage.tsx";
import TopPage from "./react-components/Top-and-Bottom-comp/TopPage.tsx";

function ReloadOnRouteChange() {
  const location = useLocation();
  useEffect(() => {
  }, [location.pathname]);
}
const changeH_F = (homeTag: React.JSX.Element, tag: React.JSX.Element) => {
  if (window.location.pathname === "/reservation") {
    return tag;
  } else {
    return homeTag;
  }
};

function App() {
  ReloadOnRouteChange();
  return (
    <>
    {changeH_F(<HeaderNav/>,<TopPage/>)}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/reservation" element={<ReservationRev />}></Route>
      </Routes>
      {changeH_F(<Footer />, <BottomPage />)}
    </>
  );
}

export default App;
