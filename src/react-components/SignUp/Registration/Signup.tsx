import React from "react";
import "./LoginStyle.css";
import TopPage from "../../Top-and-Bottom-comp/TopPage.tsx";
import BottomPage from "../../Top-and-Bottom-comp/BottomPage.tsx";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import UserModel from "../../../Models/UserClass.ts";
import ErrorMessageComp from "../../ErrorComponents/ErrorMessagePopup.tsx";

export default function Signup({ removeComp }) {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<UserModel>();
  const [registrationSuccess, setRegistrationSuccess] = React.useState(false);
  const [ErrorMessage, setErrorMessage] = React.useState(false);

  const handleForm = async (data: FieldValues) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/products/add",
        data
      );

      setRegistrationSuccess(true);

      // navigate user to login so he can log into his acc

      reset();
    } catch (error) {
      setErrorMessage(true);
      console.log(error);
    }
  };

  return (
    <div>
      <main className="main">
        <section className="main-section">
          <div className="form-part">
            <h1> Login to Steakbuds </h1>
            <span className="span">
              Enter your details to create an accounts at Steakbuds
            </span>

            <form onSubmit={handleSubmit(handleForm)} className="form">
              <label className="label" htmlFor="Fname">
                {" "}
                First name
              </label>
              <input
                type="text"
                id="Fname"
                placeholder="First name"
                {...register("firstName", { required: "First Name required" })}
              />
              {errors.firstName && (
                <p className="errMess"> {errors.firstName.message}</p>
              )}

              <label className="label" htmlFor="Lname">
                Last name
              </label>
              <input
                type="text"
                id="Lname"
                placeholder="Last name"
                {...register("lastName", { required: "Last Name required" })}
              />
              {errors.lastName && (
                <p className="errMess"> {errors.lastName.message}</p>
              )}

              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: "You must provide an Email",
                })}
              />
              {errors.email && (
                <p className="errMess"> {errors.email.message}</p>
              )}

              <label className="label" htmlFor="passw">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password required" })}
              />
              {errors.password && (
                <p className="errMess"> {errors.password.message}</p>
              )}

              <label className="label" htmlFor="ConfirmPass">
                Confirm password
              </label>
              <input
                type="password"
                id="ConfirmPass"
                placeholder="Confirm password"
                {...register("confirmPass", {
                  validate: (val) =>
                    val === getValues("password") || "Unmatched password",
                })}
              />
              {errors.confirmPass && (
                <p className="errMess"> {errors.confirmPass.message}</p>
              )}

              <input
                type="submit"
                disabled={isSubmitting}
                value="CREATE AN ACCOUNT"
                id="login"
                className="login-btn"
              />
            </form>
            {registrationSuccess && (
              <p className="ThankMessage">
                thank you for your registration, now{" "}
                <Link to="/Sign-in">Login</Link>
              </p>
            )}
          </div>
        </section>
      </main>

      {ErrorMessage && (
        <ErrorMessageComp removeComp={() => setErrorMessage(false)} />
      )}
    </div>
  );
}

// Function to generate default role object
// function getDefaultRole(): Role {
//   return { id: 2, name: ERole.ROLE_USER };
// }
