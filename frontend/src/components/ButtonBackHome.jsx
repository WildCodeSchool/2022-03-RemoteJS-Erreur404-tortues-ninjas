import React from "react";
import { Link } from "react-router-dom";
import arrowup from "../assets/arrowup.svg";
import "./ButtonBackHome.css";

/* Composant bouton pour retrourner à la page d'accueil à mettre en bas de toutes les pages. */

function ButtonBackHome() {
  return (
    <div className="max-height">
      <div className="button-back-home">
        <Link to="/">
          <img
            src={arrowup}
            alt="Bouton de retour à l'accueil"
            className="image-button-back-home"
          />
        </Link>
      </div>
    </div>
  );
}

export default ButtonBackHome;
