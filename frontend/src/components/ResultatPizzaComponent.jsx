import React, { useContext } from "react";
import { Context } from "../contexts/Context";
import "./ResultatPizzaComponent.css";

function ResultatPizzaComponent() {
  const { onePoster, filteredPizzas } = useContext(Context);
  const pizzaName = filteredPizzas.map((filteredPizza) => filteredPizza.name);
  return (
    <div className="resultat-pizza-component">
      <img src={onePoster.data.props.src} alt="img" />
      <button type="button">{pizzaName[onePoster.currentIndex]}</button>
    </div>
  );
}

export default ResultatPizzaComponent;
