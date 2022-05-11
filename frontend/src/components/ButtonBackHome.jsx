import React from "react";
import { Link } from "react-router-dom";
import "./ButtonBackHome.css";

/* Composant bouton pour retrourner à la page d'accueil à mettre en bas de toutes les pages. */

function ButtonBackHome() {
  return (
    <div className="max-height">
      <Link to="/home">
        <button type="button" id="button-back-home">
          Revenir à l&apos;accueil
        </button>
      </Link>
    </div>
  );
}

export default ButtonBackHome;
