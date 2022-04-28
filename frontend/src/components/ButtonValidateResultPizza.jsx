import React from "react";
import { Link } from "react-router-dom";
import "./ButtonValidateResultPizza.css";
/* Composant bouton pour valider et aller au popup de suggestion, sur la page Résultat Pizza */
function ButtonValidateResultPizza() {
  return (
    <div className="max-height">
      <Link to="/popup/suggestion">
        <button type="button" className="button-valider-resultat-pizza">
          Je valide !
        </button>
      </Link>
    </div>
  );
}
export default ButtonValidateResultPizza;
