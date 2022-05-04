import React from "react";
import { Link } from "react-router-dom";
import MoodLogo from "../assets/MoodLogo.png";

import "./PopupRetourAccueil.css";

function PopupRetourAccueil() {
  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <div className="popup-wrapper">
        <div className="popup-title">
          <h1>
            Votre choix est validé ! Merci de votre visite sur Mood et à bientôt
            !
          </h1>
        </div>
        <div className="popup-button">
          <Link to="/home">
            <button type="button"> Revenir à l accueil </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PopupRetourAccueil;
