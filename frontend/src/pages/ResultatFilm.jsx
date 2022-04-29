import React from "react";

import ButtonBackHome from "../components/ButtonBackHome";
import ButtonValidateResult from "../components/ButtonValidateResult";
import ResultatFilmComponent from "../components/ResultatFilmComponent";

function ResultatFilm() {
  return (
    <div>
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
