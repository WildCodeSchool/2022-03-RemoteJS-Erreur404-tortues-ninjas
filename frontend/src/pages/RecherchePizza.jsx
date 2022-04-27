import React from "react";
import MoodLogo from "../assets/MoodLogo.png";
import TitleBRPizza from "../components/TitleBRPizza";

function RecherchePizza() {
  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <TitleBRPizza />
    </div>
  );
}

export default RecherchePizza;
