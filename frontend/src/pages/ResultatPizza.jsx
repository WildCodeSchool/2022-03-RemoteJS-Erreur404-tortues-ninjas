import React from "react";
import ButtonBackHome from "../components/ButtonBackHome";
import ResultatPizzaComponent from "../components/ResultatPizzaComponent";
import "./ResultatPizza.css";

function ResultatPizza() {
  return (
    <div>
      <h1>Résultat pizzas</h1>
      <ButtonBackHome />
      <div className="resultat-pizza">
        <div>
          <ResultatPizzaComponent />
        </div>
      </div>
    </div>
  );
}

export default ResultatPizza;
