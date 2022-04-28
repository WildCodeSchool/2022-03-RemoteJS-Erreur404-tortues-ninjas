import React from "react";
import Title from "../components/Title";
import MoodLogo from "../assets/MoodLogo.png";
import ButtonBackHome from "../components/ButtonBackHome";

function RecherchePizza() {
  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <Title cls="titre" text="Quelle pizza souhaites-tu manger ? " />
      <h1>Rechercher une pizza</h1>
      <ButtonBackHome />
    </div>
  );
}

export default RecherchePizza;
