import React, { useState } from 'react'
import "./LoginStyle.css"
import TopPage from "../../Top-and-Bottom-comp/TopPage.tsx";
import BottomPage from "../../Top-and-Bottom-comp/BottomPage.tsx";
import { Navigate, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import axios from 'axios';
import ErrorMessageComp from '../../ErrorComponents/ErrorMessagePopup.tsx';

export default function Login() {

  const navigate =useNavigate()
  const {register, handleSubmit, formState:{errors, isSubmitting}, reset} = useForm()
  const [Message , setMessage] =useState(false)



      // Redirect user to Sign-up/forgot password Page
  function RedirectTo(eo){
      const { id } = eo.target

      const path = id === "signup" ? "/Sign-up" : '/Forget-password'
      console.log(path)
      
      navigate(path)
      
  } 

      // Handling Form submission
  const HandleForm = async (data: FieldValues) => {
    //
    try {
      
      const URL = 'https://dummyjson.com/products/add'

      const response= await axios.post(URL, data )
      
      // navigate the user to his profile or smt like that
      navigate("")
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

      <main className='main'>

        <section className='main-section'>

          <div className='form-part'>
            <h1> Login to Steakbuds</h1>
            <span className='span'> Login to steakbuds to enter your details</span>

            <form  onSubmit={handleSubmit(HandleForm)} className='form'> 
              <label htmlFor="email"> Email</label> 
              <input type="email"  id='email'  placeholder='Email' {...register("email" , {required:"Email required"})} />
              {errors.email && <p className='errMess'>{errors.email?.message}</p>}

              <label className='pass-label' htmlFor="passw">Password</label>
              <input type="password" id='passw'   placeholder='Password'{...register("password" , {required:"Password required"})} />
              {errors.password && <p className='errMess'>{errors.password?.message}</p>}

              <label onClick={RedirectTo} className='forgot-pass-btn'>Forgot password?</label>

              <input disabled={isSubmitting} type="submit" id='login'value={isSubmitting? "HOLD ON..." : "LOGIN"} className='login-btn' />
              
              <input onClick={RedirectTo} type="button" value="New user? SIGN UP" id='signup' className='Signup-btn' />  
            </form>
          </div>
          
          <div className='guest-part'>
            <div>
              <p>Don’t want to Sign up? Use guest reservation</p>
              <button onClick={()=> navigate("/Guest-reservation")} className='guest-btn'>GUEST RESERVATION</button>
            </div>
          </div>
        
        </section>

      </main>
 
     
      
      <BottomPage/>

      {Message && <ErrorMessageComp removeComp={()=>{ setMessage(false) }} /> }
      
    </div>
  )
}
