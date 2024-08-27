import React from "react"
import "./AccInfoStyle.css"
import YourAccount from "../Profile_header/YourAccount.tsx"
// import useGetUserHook from "../../../Hooks/GetUserHook.ts"
// import UserModel from "../../../Models/UserModal"


export default function AccouInfo() {   
    
    // const {data , Loading , error, redirect} = useGetUserHook(url)

    // useForm() catch the data
    
    // wen user update the form 
    // {} = updatUserHook({ oldData:oldData, updatedData:getValues })
    
    // if (Loading){
        // return spinner 
    //}

    // if (error){
        // return error can't fetch data
    //}

     // if (redirect){
        // navigate the user to log in page
    //}

    return(
        <section>
            <YourAccount/>
            <div className="user_data_container">
                <form >

                    <div className="form-row avatar" >
                        <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="user-male-circle"/>                    
                    </div>

                    <div className="form-row">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" value='USERNAME123' />
                    </div>

                    <div className="form-row">
                        <label htmlFor="fname">First name</label>
                        <input type="text" name="fname"   id="fname" value='sam' />
                    </div>

                    <div className="form-row">
                        <label htmlFor="Lname">Last name</label>
                        <input type="text" name="Lname"   id="Lname" defaultValue='sam' />
                    </div>

                    <div className="form-row">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"   id="email" defaultValue='sam@sam.sam' />
                    </div>

                    <div className="form-row">
                        <label htmlFor="Contact-number">Contact number</label>
                        <input type="number" name="Contact-number" id="Contact-number" defaultValue='12322222' />
                    </div>

                    <button className="save_changes" type="submit">Save changes</button>
                </form>
            </div>
        </section>
    )
}

