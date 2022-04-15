import React from "react";
import HomeButtonBobine from "../assets/HomeButtonBobine.png";
import HomeButtonPizza from "../assets/HomeButtonPizza.png";
import MoodLogo from "../assets/MoodLogo.png";
import "./HomeButton.css";

function HomeButton() {
  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <div className="HomeTwoButton">
        <div className="HomeButton">
          <img src={HomeButtonBobine} alt="HomeButtonBobine" />
        </div>
        <div className="HomeButton">
          <img src={HomeButtonPizza} alt="HomeButtonPizza" />
        </div>
      </div>
    </div>
  );
}

export default HomeButton;
