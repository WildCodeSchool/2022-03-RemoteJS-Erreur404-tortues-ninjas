import React from "react";

import ButtonBackHome from "../components/ButtonBackHome";
import ResultatFilmComponent from "../components/ResultatFilmComponent";

function ResultatFilm() {
  return (
    <div>
      <h1>Résultat films</h1>
      <div>
        <ResultatFilmComponent />
      </div>
      <ButtonBackHome />
    </div>
  );
}

export default ResultatFilm;
