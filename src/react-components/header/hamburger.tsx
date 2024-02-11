import React from "react";
import "./hamburger.css";
interface HamburgerProps {
  onClick: () => void;
  changeColor: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({ onClick, changeColor }) => {
  const ShowLines = () => {
    if (!changeColor) {
      return (
        <>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </>
      );
    } else {
      return (
        <>
          <div className="hamburger__line hamburger__line--cross hamburger__line--cross--right"></div>
          <div className="hamburger__line hamburger__line--cross hamburger__line--cross--left"></div>
        </>
      );
    }
  };
  return (
    <div className="hamburger" onClick={onClick}>
      <ShowLines />
    </div>
  );
};
export default Hamburger;
