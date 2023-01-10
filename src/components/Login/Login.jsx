import React from "react";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const [submissionResults, setsubmissionResults] = useState("Login to continue");
  return (
    <div className="container row">
      <div className="logo__container">
        <img src="https://cdn-icons-png.flaticon.com/512/49/49342.png" alt="Logo" />
      </div>
      <div className="login__container">
        <form className="login__form">
          <h1>Sign In</h1>
          <div className="credentials">
            <input type={"email"} name="email" placeholder="youremail@mail.co"></input>
            <input type={"password"} name="password" placeholder="Your Password"></input>
          </div>
          <div className="submission">
            <button className="btn btn-primary" type="submit">
              Sign In
            </button>
            <h5>{submissionResults}</h5>
          </div>
        </form>
      </div>
      <div className="other__options">
        <a href="/signup">Don't have an account ?</a>
      </div>
    </div>
  );
};

export default Login;
