import React from "react";
import "./App.css";
import NetflixText from './NetflixText.png'

const Login = () => {
  return (
    <div className="login-container">
      <div className="background-overlay"></div>
      <div className="navbar">
        <img src={NetflixText} alt="Netflix Logo" className="netflix-logo" />
      </div>
      <div className="login-box">
        <h2 className="login-title">Sign In</h2>
        <form>
          <input type="text" placeholder="Email or mobile number" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button className="login-button">Sign In</button>
          <div className="or-section">
            <span>OR</span>
          </div>
          <button className="sign-code-button">Use a sign-in code</button>
          <a href="#" className="forgot-password">Forgot password?</a>
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className="signup-text">
            New to Netflix? <a href="#">Sign up now.</a>
          </div>
          <p className="recaptcha-text">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
