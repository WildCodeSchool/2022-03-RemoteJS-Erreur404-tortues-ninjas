import React, { useContext } from "react";
import { Context } from "../contexts/Context";
import Film from "../data/Film";
import "./ResultatFilmComponent.css";

function ResultatFilmComponent() {
  const { onePoster } = useContext(Context);

  return (
    <div className="resultat-film-component">
      <img src={onePoster.data.props.src} alt="img" />
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
