import React from 'react'
import "./LoginStyle.css"
import TopPage from "../../Top-and-Bottom-comp/TopPage.tsx";
import BottomPage from "../../Top-and-Bottom-comp/BottomPage.tsx";
import { useForm } from 'react-hook-form';
import type {FieldValues} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserModel from '../../../Models/UserClass.ts';
import ErrorMessageComp from '../../ErrorComponents/ErrorMessagePopup.tsx';

export default function Signup({removeComp}) {  

  const {register, handleSubmit, reset, getValues, formState:{errors, isSubmitting} } = useForm<UserModel> ()
  const [registrationSuccess, setRegistrationSuccess] = React.useState(false);
  const [ErrorMessage, setErrorMessage] = React.useState(false);

  const navigate = useNavigate()

  

const handleForm = async (data: FieldValues) => {
  
  try {

    const response = await axios.post("", data )

    setRegistrationSuccess(true)
    
    reset()
  } catch (error) {
    setErrorMessage(true)
    console.log(error)
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


        {/*Sign-up form section */}

        <section className='form-section'>

          <div className='sub-section'>
          
  
            <h1> <b>Login to Steakbuds</b> </h1>
            <span className='span'>Enter your details to create an accounts at Steakbuds</span>

            <form onSubmit={handleSubmit(handleForm)} className='form'   >
              <label htmlFor="Fname"> First name</label> 
              <input type="text"  id='Fname'  placeholder='First name' {...register("firstName", {required:"First Name required"})}  />
              {errors.email && <p className='errMess'> {errors.email.message}</p>}

              <label htmlFor="Lname">Last name</label>
              <input type="text" id='Lname'   placeholder='Last name' {...register("lastName", {required:"Last Name required"})}  />
              {errors.email && <p className='errMess'> {errors.email.message}</p>}

              <label htmlFor="email">Email</label>
              <input type="email" id='email'   placeholder='Email' 
              {...register("email", {required:"You must provide an Email"})} />
              {errors.email && <p className='errMess'> {errors.email.message}</p>}

              <label htmlFor="passw">Password</label>
              <input type="password"   placeholder='Password'  {...register("password", {required:"Password required"})} />
              {errors.password && <p className='errMess'> {errors.password.message}</p>}

              <label htmlFor="ConfirmPass">Repeat password</label>
              <input type="password" id='ConfirmPass'  placeholder='Repeat password' {...register("confirmPass" , {validate:(val) => val === getValues("password") || "Unmatched password"})}  />
              {errors.confirmPass && <p className='errMess'> {errors.confirmPass.message}</p>}
 

              <input type="submit" disabled={isSubmitting} value="CREATE AN ACCOUNT" id='login' className='login-btn' />

            </form>
            { registrationSuccess && <p className="ThankMessage" >thank you for your registration </p>}

          </div>

    
        </section>
         
      </main>
 
      <BottomPage/>
      

     {ErrorMessage && <ErrorMessageComp removeComp={()=> setErrorMessage(false)}  />}

    </div>
  )
}
