import React from "react";
import ButtonBackHome from "../components/ButtonBackHome";
import ResultatFilmComponent from "../components/ResultatFilmComponent";
import MoodLogo from "../assets/moodlogo.png";

function ResultatFilm() {
  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <h1>Résultat films</h1>
      <div>
        <ResultatFilmComponent />
      </div>
      <ButtonBackHome />
    </div>
  );
}

export default ResultatFilm;
