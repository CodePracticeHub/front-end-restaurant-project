import React from "react";
import "./header.css";
import Hamburger from "./hamburger.tsx";
import Dropdown from "./dropdown.tsx";

import { useState } from "react";
const HeaderList: React.FC = () => {
  return (
    <ul>
      <li>book a table</li>
      <li>reservation status</li>
      <li>menu</li>
      <li>events</li>
      <li>about us</li>
      <li id="sign-in">
        <span>sign in</span>
      </li>
    </ul>
  );
};
const HeaderNav: React.FC = () => {
  const [toggleHamburgerClicked, setToggleHamburgerClicked] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const ClickHandler = () => {
    setToggleDropdown(!toggleDropdown);
    // const getHamburger: Element | null =
    //   document.getElementsByClassName("hamburger")[0];
    // if (!toggleDropdown) {
    //   (getHamburger as HTMLElement).style.background = "white";
    // } else {
    //   (getHamburger as HTMLElement).style.background = "red";
    // }
    return toggleHamburgerClicked;
  };

  return (
    <header>
      <nav className="nav">
        <section className="nav--section nav--section-top">
          <ul>
            <li>search</li>
            <li>f.a.q</li>
            <li>contact us: 9867654321</li>
          </ul>
        </section>
        <section className="nav--section nav--section-bottom">
          <picture>
            <img
              src={require("../../images/logo-steakbuds-1000-x-285-20.png")}
              alt="logo"
            />
          </picture>
          <HeaderList />
          <Hamburger changeColor={toggleDropdown} onClick={ClickHandler} />
        </section>
        <Dropdown toggle={toggleDropdown} />
      </nav>
    </header>
  );
};

export { HeaderNav, HeaderList };
