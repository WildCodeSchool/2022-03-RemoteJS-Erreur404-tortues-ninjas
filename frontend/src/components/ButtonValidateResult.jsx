import React from "react";
import { Link } from "react-router-dom";
import "./ButtonValidateResult.css";
/* Composant bouton pour valider et aller au popup de suggestion, sur la page Résultat Pizza (bouton vert) ou film (bouton rouge) */
function ButtonValidateResult({ buttoncolor }) {
  return (
    <div className="max-height">
      <Link to="/popup/home">
        <button type="button" className={buttoncolor}>
          Je valide !
        </button>
      </Link>
    </div>
  );
}
export default ButtonValidateResult;
