import React, { useState } from "react";
import "./LoginStyle.css";
import TopPage from "../../Top-and-Bottom-comp/TopPage.tsx";
import BottomPage from "../../Top-and-Bottom-comp/BottomPage.tsx";
import { useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import ErrorMessageComp from "../../ErrorComponents/ErrorMessagePopup.tsx";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [Message, setMessage] = useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  // Redirect user to Sign-up/forgot password Page
  function RedirectTo(eo) {
    const { id } = eo.target;

    const path = id === "signup" ? "/Sign-up" : "/Forget-password";
    console.log(path);

    navigate(path);
  }

  // Handling Form submission
  const HandleForm = async (data: FieldValues) => {
    try {
      const URL = "http://localhost:8090/api/auth/signin";

      const response = await axios.post(URL, data);

      // navigate the user to his profile or smt like that
      setIsLoginSuccess(true);
      setMessage("Login successful!");
      setTimeout(() => {
        setIsLoginSuccess(false);
        setMessage("");
        navigate("/reservation"); // Redirect to dashboard upon successful login
      }, 3000); // Reset success message after 3 seconds

      // will clear the inputs in case submission went well
      reset();
    } catch (error) {
      console.log(error);
      setMessage("An error occurred during login.");
    }
  };

  return (
      <div>
        <main className="main">
          <section className="main-section">
            <div className="form-part">
              <h1> Login to Steakbuds</h1>
              <span className="span">
              {" "}
                Login to steakbuds to enter your details
            </span>

              <form onSubmit={handleSubmit(HandleForm)} className="form">
                <label htmlFor="username"> Username</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    {...register("username", { required: "Username required" })}
                />
                {errors.username && (
                    <p className="errMess">{errors.username?.message}</p>
                )}

                <label className="pass-label" htmlFor="passw">
                  Password
                </label>
                <input
                    type="password"
                    id="passw"
                    placeholder="Password"
                    {...register("password", { required: "Password required" })}
                />
                {errors.password && (
                    <p className="errMess">{errors.password?.message}</p>
                )}

                <label onClick={RedirectTo} className="forgot-pass-btn">
                  Forgot password?
                </label>

                <input
                    disabled={isSubmitting}
                    type="submit"
                    id="login"
                    value={isSubmitting ? "HOLD ON..." : "LOGIN"}
                    className="login-btn"
                />

                <input
                    onClick={RedirectTo}
                    type="button"
                    value="New user? SIGN UP"
                    id="signup"
                    className="Signup-btn"
                />
              </form>
            </div>

            <div className="guest-part">
              <div>
                <p>Don’t want to Sign up? Use guest reservation</p>
                <button
                    onClick={() => navigate("/Guest-reservation")}
                    className="guest-btn"
                >
                  GUEST RESERVATION
                </button>
              </div>
            </div>
          </section>
        </main>

        {Message && <p className={isLoginSuccess ? "successMsg" : "errMsg"}>{Message}</p>}
      </div>
  );
}
