import React from 'react'
import "./GuestReservationStyle.css"

export default function GuestReservation() {
    
  return (
    <div className='top-container'>

        <section className='wrapper border-wrapper'>

                {/* the first div  */}
            <div className='first-div'>
                <h2>Guest Reservation</h2>
                <span className='line'>Selected reservation informations</span>
                <div className="selected-data">
                    <p>Date:                    <span>- data</span>       </p>
                    <p>Time:                    <span>- data</span>       </p>
                    <p>Number of seats:         <span>- data</span>       </p>
                    <p>Location:                <span>- data</span>       </p>
                </div>
                <hr className='bottom-line' />

            </div>

        
        </section>
    </div>
  )
}
