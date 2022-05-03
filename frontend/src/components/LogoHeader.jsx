// Create a new component logo-header.jsx
import React from "react";
import MoodLogo from "../assets/LogoMood.png";
import "./LogoHeader.css";

function Logoheader() {
  return (
    <div className="logo-header">
      <div className="logoheader">
        <img src={MoodLogo} alt="logo-header-mood" />
      </div>
    </div>
  );
}

export default Logoheader;
