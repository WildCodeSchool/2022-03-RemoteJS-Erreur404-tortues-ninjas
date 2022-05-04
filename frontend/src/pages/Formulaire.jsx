import React from "react";
import Title from "../components/Title";

import MoodLogo from "../assets/MoodLogo.png";

function Formulaire() {
  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <Title
        cls="titre"
        text="Tu veux ajouter une nouvelle pizza à notre site ? Dis-nous tout !"
      />
    </div>
  );
}

export default Formulaire;
