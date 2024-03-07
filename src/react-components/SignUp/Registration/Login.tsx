import React, { useState } from 'react'
import "./LoginStyle.css"
import TopPage from "../../Top-and-Bottom-comp/TopPage.tsx";
import BottomPage from "../../Top-and-Bottom-comp/BottomPage.tsx";
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import axios from 'axios';
import ErrorMessageComp from '../../ErrorComponents/ErrorMessagePopup.tsx';


export default function Login() {

  const navigate =useNavigate()
  const {register, handleSubmit, formState:{errors, isSubmitting}, reset} = useForm()
  const [Message , setMessage] =useState(false)



      // Redirect user to Sign-up/forgot password Page
  function HeadTo(eo){
      const { id } = eo.target

      const path = id === "signup" ? "/Sign-up" : '/Forget-password'
      console.log(path)
      
      navigate(path)
      
  } 

      // Handling Form submission
  const HandleForm = async (data: FieldValues) => {
    //
    try {
      
      const URL = ''

      const response= await axios.post(URL, data )
  
      // will clear the inputs in case submission went well
      reset()

    } 
    catch (error) {
      console.log(error)
      setMessage(true)

    } 


      
  }

    
  

  return (
    <div>

      <TopPage/>

      <main className='Login-main'>

        <div className="Left-Side" >
          <span onClick={()=> navigate(-1)} className="iconAndtext">
          <img className="Back-icon"  width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/left.png" alt="left"/>     
          <span>Back</span>     
          </span>
        </div>


        {/* FROM SECTION */}

        <section className='form-section'>

          <div className='sub-section'>
          
            <h1> <b>Login to Steakbuds</b> </h1>
            <span className='span'>Login to steakbuds to enter your details</span>

            <form className='form' onSubmit={handleSubmit(HandleForm)} >
              <label htmlFor="email"> Email</label> 
              <input type="email"  id='email'  placeholder='Email'  {...register("email" , {required:"You must provide an email"})} />
              {errors.email && <p className='errMess'>{errors.email.message}</p>}

              
              <label htmlFor="passw">Password</label>
              <input type="password" id='passw'   placeholder='Password'  {...register("password" , {required:"You must provide password"})}/>
              {errors.password && <p className='errMess'>{errors.password.message}</p>}

              <label onClick={HeadTo} className='forgot-pass-btn'>Forgot password?</label>

              <input disabled={isSubmitting} type="submit" value={isSubmitting? "HOLD ON..." : "LOGIN"} id='login' className='login-btn' />
              
              <input onClick={HeadTo} type="button" value="New user? SIGN UP" id='signup' className='Signup-btn' />  

            </form>

          </div>

    
        </section>
         
      </main>
 
      <div className='Guest-div'>
        <div className='empty-left-div'></div>

        <div className='right-div'>

          <div className='sub-right-div'>
            <p>Don’t want to Sign up? Use guest reservation</p>
            <button onClick={()=> navigate("/Guest-reservation")} className='guest-btn'>GUEST RESERVATION</button>
          </div>

        </div>
      </div>
      
      <BottomPage/>

      {Message && <ErrorMessageComp removeComp={()=>{ setMessage(false) }} /> }
      
    </div>
  )
}
