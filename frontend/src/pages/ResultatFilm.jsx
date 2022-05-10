import React, { useState, useContext, useEffect } from "react";
import ButtonBackHome from "../components/ButtonBackHome";
import ButtonValidateResult from "../components/ButtonValidateResult";
import ResultatFilmComponent from "../components/ResultatFilmComponent";

import DataPizza from "../data/DataPizza";
import MoodLogo from "../assets/MoodLogo.png";
import { Context } from "../contexts/Context";

function ResultatFilm() {
  const { genreId } = useContext(Context);
  const [pizzaRandom, setPizzaRandom] = useState({});
  const filteredPizzas = DataPizza.filter(
    (filteredPizza) => filteredPizza.categoryFilm === genreId
  );

  useEffect(() => {
    setPizzaRandom(
      filteredPizzas[Math.floor(Math.random() * filteredPizzas.length)]
    );
  }, []);

  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <ResultatFilmComponent />
      <p>{pizzaRandom.phrase}</p>
      <ButtonValidateResult buttoncolor="bouton-valider-resultat-film" />
      <div>
        <img src={pizzaRandom.image} alt="une pizza" />
        <button type="button">{pizzaRandom.name}</button>
      </div>
      <ButtonBackHome />
    </div>
  );
}

export default ResultatFilm;
