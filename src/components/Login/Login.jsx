import React from "react";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const [submissionResults, setsubmissionResults] = useState("Login to continue");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://172.20.10.11:3000/user/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setsubmissionResults("Login Successful");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container row">
      <div className="logo__container">
        <img src="https://cdn-icons-png.flaticon.com/512/49/49342.png" alt="Logo" />
      </div>
      <div className="login__container">
        <form className="login__form" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className="credentials">
            <input
              type={"email"}
              name="email"
              placeholder="youremail@mail.co"
              value={formData.email}
              onChange={handleChange}
            ></input>
            <input
              type={"password"}
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
            ></input>
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
