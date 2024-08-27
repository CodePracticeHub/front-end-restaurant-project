import React from 'react'
import "./SpinnerLoadingStyle.css"

export const SpinnerLoading = ({errorDescription=""}) => {
    
    return (
        <div className='Loading-div' style={{height:"500px"}}>
            <span className="loader"></span>
            <p>{errorDescription}</p>
            
        </div>
        
    );
}