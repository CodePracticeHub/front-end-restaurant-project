import React from "react";
import "./hamburger.css";
import Dropdown from "./dropdown";
import { useState } from "react";
interface HamburgerProps {
  onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ onClick }) => {
  return (
    <div className="hamburger" onClick={onClick}>
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
    </div>
  );
};
export default Hamburger;
