import React from 'react'
import './UserprofileStyle.css'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

export default function UserProfile() {
  return (
    <section className='user_Profile'>

        <div className='sub_cont'>

                <div className='your_acc_container'>

                  <FaRegArrowAltCircleLeft className='arrow' size={25} /> 

                  <h2>  Your Account </h2>

                </div>

                <div className='Options_container'>

                    <ul className='list_of_options'>
                      <li>Account information</li>
                      <li>Your reservation</li>
                      <li>Your orders</li>
                      <li>Your wishlist</li>
                      <li>Payment information</li>
                      <li>Saved adresses</li>
                      <li>Account security</li>
                      <li>Notifications</li>
                      <li>Languages</li>
                    </ul>

               
                </div>
        </div>

    </section>
  )
}










