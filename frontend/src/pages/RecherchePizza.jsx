import React from "react";
import Title from "../components/Title";
import MoodLogo from "../assets/MoodLogo.png";

function RecherchePizza() {
  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <Title cls="titre" text="Quelle pizza souhaites-tu manger ? " />
    </div>
  );
}

export default RecherchePizza;
