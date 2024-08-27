import React from 'react'
import "./SpinnerLoadingStyle.css"

export const SpinnerLoading = ({errorDescription=""}) => {
    
    return (
        <div className='Loading-div' style={{height:"500px"}}>
            <div className="loader"></div> 
            <p>{errorDescription}</p>
            
        </div>
        
    );
}