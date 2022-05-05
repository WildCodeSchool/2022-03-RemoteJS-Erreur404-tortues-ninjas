import React from "react";
import { Link } from "react-router-dom";
import MoodLogo from "../assets/moodlogo.png";

import "./PopupRetourAccueil.css";
import PopupHomeReturn from "../components/PopupHomeReturn";

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
          <Link to="/home" type="button">
            {" "}
            Revenir à l&apos;accueil
          </Link>
        </div>
      </div>
      <PopupHomeReturn />
    </div>
  );
}

export default PopupRetourAccueil;
