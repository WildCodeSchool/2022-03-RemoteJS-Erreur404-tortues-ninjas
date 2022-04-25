import React from "react";
import { Link } from "react-router-dom";
import HomeButtonBobine from "../assets/HomeButtonBobine.png";
import HomeButtonPizza from "../assets/HomeButtonPizza.png";
import "./HomeButton.css";

function HomeButton() {
  return (
    <div className="max-height">
      <div className="HomeTwoButton">
        <div className="HomeButton">
          <Link to="/search/film">
            <img
              src={HomeButtonBobine}
              alt="HomeButtonBobine"
              className="image-button"
            />
          </Link>
        </div>
        <div className="HomeButton">
          <Link to="/search/pizza">
            <img
              src={HomeButtonPizza}
              alt="HomeButtonPizza"
              className="image-button"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeButton;
