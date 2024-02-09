import "./App.css";
import React from "react";
import { HeaderNav } from "./react-components/header/header.tsx";
import Footer from "./react-components/footer/footer.tsx";
import Homepage from "./react-components/homepage/homepage.tsx";

function App() {
  return (
    <>
      <HeaderNav />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
