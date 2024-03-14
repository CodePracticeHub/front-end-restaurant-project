import React from 'react'
import './ErrorStyle.css'

export default function ErrorMessageComp(props) {

  return (
      
     <div className='error-div'>
      <span className='error-span'>
        <p className='p'>Something went wrong, Try again         </p>
        <button onClick={props.removeComp}>
        <img width="30" height="30" src="https://img.icons8.com/sf-black/30/000000/delete-sign.png" alt="delete-sign"/>       
        </button>
        </span>
      </div>
  
  )
}
