import React from "react";
import Film from "../data/Film";
import "./ResultatFilmComponent.css";

function ResultatFilmComponent() {
  return (
    <div className="resultat-film-component">
      <img src={Film[0].poster_path} alt="img" />
      <button
        type="button"
        onClick={() => window.open(Film[0].teasing, "_blank")}
      >
        VOIR LA BANDE ANNONCE
      </button>
    </div>
  );
}

export default ResultatFilmComponent;
