import React from "react";
import { Link } from "react-router-dom";
import "./ButtonValidateResultFilm.css";

/* Composant bouton pour valider et aller au popup de suggestion, sur la page Résultat Film */
function ButtonValidateResultFilm() {
  return (
    <div className="max-height">
      <Link to="/popup/suggestion">
        <button type="button" className="button-valider-resultat-film">
          Je valide !
        </button>
      </Link>
    </div>
  );
}

export default ButtonValidateResultFilm;
