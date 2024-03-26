import React from 'react'
import "./GuestReservationStyle.css"
import { FaArrowRight } from "react-icons/fa";


export default function GuestReservation() {

  return (
    <div className='top-container'>

        <section className='wrapper border-wrapper'>

                {/* the first div  */}
            <div className='first-div'>
                <h2>Guest Reservation</h2>
                <span className='Guest-Res-Sub-title'>Selected reservation informations</span>
                <div className="selected-data">
                    <p>Date:                    <span>- data</span>       </p>
                    <p>Time:                    <span>- data</span>       </p>
                    <p>Number of seats:         <span>- data</span>       </p>
                    <p>Location:                <span>- data</span>       </p>
                </div>
                <hr className='bottom-line' />

            </div>
            
            <form>
                <div className='second-div'>
                    <span className='Guest-Res-Sub-title'>Personal informations</span>
                    <label className="Guest-Res-label" For="name">
                        Name
                        <input type="email" placeholder="Enter your name" id="name" className='Guest-Res-Input' />
                    </label>  
                    <label className='Guest-Res-label'>
                        Email 
                        <input type="email" placeholder="Enter your email" id="email" className='Guest-Res-Input' />
                    </label>
                    <label className='Guest-Res-label' >
                        Contact number 
                        <input type="email" placeholder="Enter your phone number" id="contactNum" className='Guest-Res-Input' />
                    </label>
                    <hr className='bottom-line' />

                </div>


                <div className='third-div'>
                    <span className='Guest-Res-Sub-title'>Payment informations</span>

                    <div className='row-one'>
                        <label className='CCN Guest-Res-label' >
                            Credit card number
                            <input type="number" placeholder='Credit card cumber' id='CreditCardNumber' className='Guest-Res-Input' />
                        </label>
                        <label className='CVC Guest-Res-label' >
                            CVC
                            <input type="number" placeholder='CVC' id='CVC' className='Guest-Res-Input' />
                        </label>
                    </div>

                    <label className='CHN row-two Guest-Res-label' >
                        Card holder name
                        <input type="text" placeholder='Card Holder Name' id='CardHolderName' className='Guest-Res-Input' />
                    </label>
                    
                    <div className='Last-row'>
                        <label className='Guest-Res-label'>  Expiration date   </label>
                        <div className='trio'>
                            <input type="number" placeholder='DAY' className='Guest-Res-Input' />
                            <input type="number" placeholder='MONTH' className='Guest-Res-Input' />
                            <input type="number" placeholder='YEAR' className='Guest-Res-Input' />
                        </div>
                    </div>
                </div>

                <button type='submit' className='submit-btn'> 
                    CONFIRM DETAILS 
                    <FaArrowRight size={20}/> 
                </button> 
            </form>



        
        </section>
    </div>
  )
}
