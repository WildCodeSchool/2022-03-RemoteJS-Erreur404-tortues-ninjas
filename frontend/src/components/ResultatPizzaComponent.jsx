import React from "react";
import Pizza from "../data/Pizza";
import "./ResultatPizzaComponent.css";

function ResultatPizzaComponent() {
  return (
    <div className="resultat-pizza-component">
      <img src={Pizza[0].image} alt="img" />
      <button type="button">{Pizza[0].name}</button>
    </div>
  );
}

export default ResultatPizzaComponent;
