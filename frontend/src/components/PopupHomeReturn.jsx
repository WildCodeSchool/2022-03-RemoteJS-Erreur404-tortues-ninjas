import React from "react";
// import { Link } from "react-router-dom";
import ButtonBackHome from "./ButtonBackHome";
import "./PopupHomeReturn.css";

function PopupHomeReturn() {
  return (
    <div className="popup-wrapper">
      <div className="titre-home-return">
        <p>C est validé ! Merci et bonne soirée.</p>
      </div>
      <div>
        <ButtonBackHome />
      </div>
    </div>
  );
}

export default PopupHomeReturn;
