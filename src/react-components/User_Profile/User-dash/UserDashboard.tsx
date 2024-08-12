import React from "react";
import { IoIosRestaurant } from "react-icons/io";
import {IoLanguageOutline,IoNotificationsCircleOutline } from "react-icons/io5";
import { MdAccountCircle, MdSecurity } from "react-icons/md";
import { Link } from "react-router-dom";
import "./UserDashboardStyle.css"
import { FaRegCreditCard } from "react-icons/fa";
import YourAccount from "../Profile_header/YourAccount.tsx";


export default function UserDashboard() {
  return (
    <section>

      <YourAccount />
      <div className="Options_container">
        <ul className="list_of_options">
          <Link to="account-infos">
          <li className="AccouInfo">
            <MdAccountCircle size={25} color="red" /> Account information
          </li>
          </Link>

          <li className="YourRes">Your reservation</li>
          <li className="orders">
            <IoIosRestaurant size={25} color="red" /> Your orders
          </li>
          <li className="wishlist">Your wishlist</li>
          <li className="paymentInfo"><FaRegCreditCard color="red" size={25}/> Payment information</li>
          <li className="savedAdresses">Saved adresses</li>
          <li className="accSec">
            <MdSecurity size={25} color="red" /> Account security
          </li>
          <li className="Notif">
            {" "}
            <IoNotificationsCircleOutline size={25} color="red" />
            Notifications
          </li>
          <li className="Lang">
            <IoLanguageOutline size={25} color="red" />
            Languages
          </li>
        </ul>
      </div>
    </section>
  );
}
