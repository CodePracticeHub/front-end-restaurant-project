import React from 'react'
import "./GuestReservationStyle.css"
import { FaArrowRight } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';


export default function GuestReservation() {

    const {register ,reset , handleSubmit ,getValues, formState:{errors , isSubmitted}} = useForm()
    
    const HandlForm = (data) => {

        try {
            const URL = ""
            const resp = fetch(URL ,  {method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify({ 
                // data 
            })
        })
        
        // Navigate to the reservation detail page wen post method works well (still need that logic here)
             Navigate("/reservation-details")

        } catch (error) {
            console.log(error)
        }
    
    }
    
  return (
    <div className='top-container'>

        <section className='wrapper border-wrapper'>

                {/* the first div  */}
            <div className='first-div'>
                <h2>Guest Reservation</h2>
                <span className='Guest-Res-Sub-title'>Selected reservation informations</span>
                <div className="selected-data">
                    <div className='fields'>
                        <span>Date</span>
                        <span>Time</span>
                        <span>Number of seats</span>
                        <span>Location</span>

                    </div>

                    <div className='data'>
                        <span>data</span>
                        <span>data</span>
                        <span>data</span>
                        <span>data</span>

                    </div>

                </div>
                <hr className='bottom-line' />

            </div>
            
            <form onSubmit={handleSubmit(HandlForm)}>
                <div className='second-div'>
                    <span className='Guest-Res-Sub-title'>Personal informations</span>
                    <label className="Guest-Res-label" For="name">
                        Name
                        <input type="text" placeholder="Enter your name" 
                        id="name" className='Guest-Res-Input' {...register("Name", {required:"Field required"} )}  />
                        {errors.Name && <p> {errors.Name.message}</p>}
                    </label>  
                    <label className='Guest-Res-label'>
                        Email 
                        <input type="email" placeholder="Enter your email"
                         id="email" className='Guest-Res-Input' {...register("Email", {required:"Field required"} )} />
                         {errors.Email && <p> {errors.Email.message}</p>}
                    </label>
                    <label className='Guest-Res-label' >
                        Contact number 
                        <input type="number" placeholder="Enter your phone number"
                            id="contactNum" className='Guest-Res-Input' {...register("ContactNumber", {required:"Field required"} )} />
                            {errors.ContactNumber && <p>{errors.ContactNumber.message}</p> }
                    </label>
                    <hr className='bottom-line' />

                </div>


                <div className='third-div'>
                    <span className='Guest-Res-Sub-title'>Payment informations</span>

                    <div className='row-one'>
                        <label className='CCN Guest-Res-label' >
                            Credit card number
                            <input type="number" placeholder='Credit card cumber' {...register("ccn", {required:"Field required"} )}
                             id='CreditCardNumber' className='Guest-Res-Input' />
                             {errors.ccn && <p>{errors.ccn.message}</p>}
                        </label>
                        <label className='CVC Guest-Res-label' >
                            CVC
                            <input type="number" placeholder='CVC' id='CVC'
                             className='Guest-Res-Input' {...register("cvc", {required:"Field required"} )} />
                            {errors.cvc && <p> {errors.cvc.message}</p>}

                        </label>
                    </div>

                    <label className='CHN row-two Guest-Res-label' >
                        Card holder name
                        <input type="text" placeholder='Card Holder Name' {...register("chn", {required:"Field required"} )}
                         id='CardHolderName' className='Guest-Res-Input' />
                        {errors.chn && <p>Error: {errors.chn.message}</p>}
                    </label>
                    
                    <div className='Last-row'>
                        <label className='Guest-Res-label'>  Expiration date   </label>
                        <div className='trio'>
                            <input type="number" placeholder='DAY'  className={`Guest-Res-Input ${errors.day && "BorderRed"}` } {...register("day", {required:"Field required"} )}/>
                            <input type="number" placeholder='MONTH' className='Guest-Res-Input' {...register("month", {required:"Field required"} )} />
                            <input type="number" placeholder='YEAR' className='Guest-Res-Input' {...register("year", {required:"Field required"} )} />
                        </div>
                        {(errors.day || errors.month || errors.year )&& <p> {errors.day.message}</p>}
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
