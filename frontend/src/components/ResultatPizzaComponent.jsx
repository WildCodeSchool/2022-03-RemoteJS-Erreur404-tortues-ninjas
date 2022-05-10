import React, { useContext } from "react";
import { Context } from "../contexts/Context";
import "./ResultatPizzaComponent.css";

function ResultatPizzaComponent() {
  const { onePoster, pizzas, genreId } = useContext(Context);
  const filteredPizzas = pizzas.filter((pizza) => pizza.category === genreId);
  const pizzaName = filteredPizzas.map((filteredPizza) => filteredPizza.name);

  return (
    <div className="resultat-pizza-component">
      <img src={onePoster.data.props.src} alt="img" />
      <button type="button">{pizzaName[onePoster.currentIndex]}</button>
    </div>
  );
}

export default ResultatPizzaComponent;
