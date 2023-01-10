import React from "react";
import "../Signup/signup.css";
import { useState } from "react";

const Signup = () => {
  const [submissionResults, setsubmissionResults] = useState("Sign up to continue");
  return (
    <div className="container row">
      <div className="logo__container">
        <img src="https://cdn-icons-png.flaticon.com/512/49/49342.png" alt="Logo" />
      </div>
      <div className="login__container">
        <form className="login__form">
          <h1>Sign Up</h1>
          <div className="credentials">
            <div className="two__columns">
              <input type={"text"} name="name" placeholder="John"></input>
              <input type={"text"} name="lastName" placeholder="Cena"></input>
            </div>
            <input type={"email"} name="email" placeholder="youremail@mail.co"></input>
            <input type={"password"} name="password" placeholder="Your Password"></input>
          </div>
          <div className="submission">
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>

            <h5>{submissionResults}</h5>
          </div>
        </form>
      </div>
      <div className="other__options">
        <a href="/">Already have an account ?</a>
      </div>
    </div>
  );
};

export default Signup;
