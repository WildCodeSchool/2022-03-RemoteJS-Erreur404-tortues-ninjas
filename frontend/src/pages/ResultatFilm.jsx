import React, { useState, useContext, useEffect } from "react";
import ButtonBackHome from "../components/ButtonBackHome";
import ButtonValidateResult from "../components/ButtonValidateResult";
import ResultatFilmComponent from "../components/ResultatFilmComponent";

import DataPizza from "../data/DataPizza";
import MoodLogo from "../assets/MoodLogo.png";
import { Context } from "../contexts/Context";

import "./ResultatFilm.css";
import "./Recherche.css";

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
      <div className="recherche-button-back-home">
        <ButtonBackHome />
      </div>
      <div className="resultat-film">
        <ResultatFilmComponent />
        <div className="resultat-film-result">
          <p className="resultat-film-desc">{pizzaRandom.phrase}</p>
          <div className="resultat-film-poster-button">
            <img
              className="resultat-film-pizza-poster"
              src={pizzaRandom.image}
              alt="une pizza"
            />
            <button type="button" id="resultat-film-button">
              {pizzaRandom.name}
            </button>
          </div>
        </div>
      </div>
      <ButtonValidateResult buttoncolor="bouton-valider-resultat-film" />
    </div>
  );
}

export default ResultatFilm;
