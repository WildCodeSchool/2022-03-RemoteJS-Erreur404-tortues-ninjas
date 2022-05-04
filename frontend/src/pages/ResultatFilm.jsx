import React from "react";
import ButtonBackHome from "../components/ButtonBackHome";
import ButtonValidateResult from "../components/ButtonValidateResult";
import ResultatFilmComponent from "../components/ResultatFilmComponent";

import MoodLogo from "../assets/MoodLogo.png";

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
      <ButtonValidateResult buttoncolor="bouton-valider-resultat-film" />
      <ButtonBackHome />
    </div>
  );
}

export default ResultatFilm;
