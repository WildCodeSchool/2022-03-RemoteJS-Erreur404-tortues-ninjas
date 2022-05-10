import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import ButtonBackHome from "../components/ButtonBackHome";
import ButtonValidateResult from "../components/ButtonValidateResult";
import ResultatPizzaComponent from "../components/ResultatPizzaComponent";
import MoodLogo from "../assets/MoodLogo.png";
import DataPizza from "../data/DataPizza";
import { Context } from "../contexts/Context";

import "./ResultatPizza.css";

function ResultatPizza() {
  const { genreId } = useContext(Context);
  const [filteredMovie, setFilteredMovie] = useState([]);
  const filteredPizzas = DataPizza.filter(
    (filteredPizza) => filteredPizza.category === genreId
  );

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }&with_genres=${filteredPizzas[0].categoryFilm}`
      )
      .then((res) => {
        setFilteredMovie(
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
        );
      });
  }, []);

  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <div className="resultat-pizza">
        <ResultatPizzaComponent />
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500${filteredMovie.poster_path}`}
        alt="poster"
      />
      <ButtonValidateResult buttoncolor="bouton-valider-resultat-pizza" />
      <ButtonBackHome />
    </div>
  );
}
export default ResultatPizza;
