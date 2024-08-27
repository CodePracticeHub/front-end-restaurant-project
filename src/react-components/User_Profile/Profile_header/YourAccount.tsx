import React from 'react'
import './YourAccountStyle.css'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export default function YourAccount() {

      const navigate = useNavigate()

  return (  
        <div className='Your-Account-Container'>
            <div className='your_acc_Sub_Container'>
                  <FaRegArrowAltCircleLeft onClick={()=> navigate("/dashboard")} className='arrow' size={25}/> 
                  <h2>  Your Account </h2>
            </div>      
        </div>

  )
}










