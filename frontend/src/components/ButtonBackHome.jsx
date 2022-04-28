import React from "react";
import { Link } from "react-router-dom";
import "./ButtonBackHome.css";

/* Composant bouton pour retrourner à la page d'accueil à mettre en bas de toutes les pages. */

function ButtonBackHome() {
  return (
    <div className="max-height">
      <Link to="/">
        <button type="button" className="button-back-home">
          {" "}
          Revenir à l accueil{" "}
        </button>
      </Link>
    </div>
  );
}

export default ButtonBackHome;