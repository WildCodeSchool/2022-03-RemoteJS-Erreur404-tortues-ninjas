// Create a new component logo-header.jsx
import React from "react";
import LogoMood from "../assets/LogoMood.png";

function Logoheader() {
  return (
    <div className="logoheader">
      <img src={LogoMood} alt="logo-header-mood" />
    </div>
  );
}

export default Logoheader;
