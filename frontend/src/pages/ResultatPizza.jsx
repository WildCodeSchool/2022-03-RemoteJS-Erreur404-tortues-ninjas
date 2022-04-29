import React from "react";

import ButtonBackHome from "../components/ButtonBackHome";
import ButtonValidateResult from "../components/ButtonValidateResult";
import ResultatPizzaComponent from "../components/ResultatPizzaComponent";

import "./ResultatPizza.css";

function ResultatPizza() {
  return (
    <div>
      <h1>Résultat films</h1>
      <div className="resultat-pizza">
        <div>
          <ResultatPizzaComponent />
        </div>
      </div>
      <ButtonValidateResult buttoncolor="bouton-valider-resultat-pizza" />
      <ButtonBackHome />
    </div>
  );
}
export default ResultatPizza;
