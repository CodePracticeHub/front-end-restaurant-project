import React from "react";
import "./header.css";
const HeaderNav: React.FC = () => {
  return (
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
            src={require("../images/logo-steakbuds-1000-x-285-20.png")}
            alt=""
          />
        </picture>
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
      </section>
    </nav>
  );
};

export default HeaderNav;
