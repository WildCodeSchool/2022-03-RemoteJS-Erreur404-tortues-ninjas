import React from "react";
import MoodLogo from "../assets/MoodLogo.png";
import TitleBRFilm from "../components/TitleBRFilm";

function RechercheFilm() {
  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <TitleBRFilm />
    </div>
  );
}
export default RechercheFilm;
