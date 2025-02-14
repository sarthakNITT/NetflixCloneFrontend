import React from "react";
import "./App.css";
import NetflixText from "./NetflixText.png";
import { FaGlobe } from "react-icons/fa";

const NetflixLanding = () => {
  return (
    <div className="netflix-container">
      <div className="nav">
        <img src={NetflixText} alt="Netflix Logo" className="netflix-logo" />
        <div className="nav-buttons">
          <button className="language-button">
            <FaGlobe /> English ▾
          </button>
          <button className="sign-in-button">Sign In</button>
        </div>
      </div>
      <div className="hero">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Starts at ₹149. Cancel at any time.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="email-form">
          <input type="email" placeholder="Email address" />
          <button>Get Started &gt;</button>
        </div>
      </div>
      <div className="trending">Trending Now</div>
    </div>
  );
};

export default NetflixLanding;
