import React from "react";
import HomeButtonBobine from "../assets/HomeButtonBobine.png";
import HomeButtonPizza from "../assets/HomeButtonPizza.png";

import "./HomeButton.css";

function HomeButton() {
  return (
    <div className="max-height">
      <div className="HomeTwoButton">
        <div className="HomeButton">
          <img
            src={HomeButtonBobine}
            alt="HomeButtonBobine"
            className="image-button"
          />
        </div>
        <div className="HomeButton">
          <img
            src={HomeButtonPizza}
            alt="HomeButtonPizza"
            className="image-button"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeButton;
