import React from "react";
import "./App.css"; 
import NetflixText from './NetflixText.png'

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="background-overlay"></div>

      {/* Netflix Logo */}
      <div className="navbar">
        <img src={NetflixText} alt="Netflix Logo" className="netflix-logo" />
      </div>

      {/* Sign In Box */}
      <div className="signin-box">
        <h2 className="signin-title">Sign In</h2>
        <form>
          <input type="text" placeholder="Email or mobile number" className="signin-input" />
          <input type="password" placeholder="Password" className="signin-input" />
          <button className="signin-button">Sign In</button>

          <div className="or-section">
            <span>OR</span>
          </div>

          <button className="signin-code-button">Use a sign-in code</button>
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

export default SignIn;
