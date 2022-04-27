import React from "react";
import TitleForm from "../components/TitleForm";
import MoodLogo from "../assets/MoodLogo.png";

function Formulaire() {
  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <TitleForm />
    </div>
  );
}

export default Formulaire;
