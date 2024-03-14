import React from 'react'
import "./TopStyle.css"
import { useNavigate } from 'react-router-dom'


export default function TopPage() {
  const navigate = useNavigate()
  return (
    
    <div className="Page-Top"> 
      
      <span onClick={()=> navigate(-1)} className="Back-icon">
        <img width="45" height="45" src="https://img.icons8.com/ios-filled/50/FFFFFF/left.png" alt="left"/>     
      </span>
      
      <img src="images/logo-steakbuds-1000-x-285-20.png" alt="Logo" />

    </div>

  )
}
