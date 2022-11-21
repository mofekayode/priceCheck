import React, { useState } from "react";
import "./App.css";
import PasswordIcon from "./Assets/passwordIcon.svg";
import { Link } from "react-router-dom";
export default function Login() {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="App">
      <div className="Sign-Box">
        <div className="Header-name">Sign In</div>
        <form>
          <input className="username " placeholder="Username" />
          <div className="password-box">
            <input
              className="password"
              placeholder="Password"
              type={hidden ? "password" : "text"}
            />
            {hidden ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
                alt="password-icon"
                className="password-icon"
                onClick={() => {
                  setHidden(false);
                }}
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/2767/2767146.png"
                alt="password-icon"
                className="password-icon"
                onClick={() => {
                  setHidden(true);
                }}
              />
            )}
          </div>
          <div className="forgot-password">Forgot Password?</div>
          <Link to="/price-check">
            <div className="login">Login</div>
          </Link>
        </form>
      </div>
    </div>
  );
}
