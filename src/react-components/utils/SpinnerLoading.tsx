import React from 'react'
import "./SpinnerLoadingStyle.css"

export const SpinnerLoading = () => {
    
    return (
        <div className='Loading-div' style={{height:"500px"}}>
            <div className="loader"></div> 
        </div>
        
    );
}