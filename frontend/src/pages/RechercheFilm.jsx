import React from "react";
import Title from "../components/Title";
import MoodLogo from "../assets/MoodLogo.png";

function RechercheFilm() {
  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <Title cls="titre" text="Quel film souhaites-tu regarder ?" />
    </div>
  );
}

export default RechercheFilm;
