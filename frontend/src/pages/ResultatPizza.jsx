import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../contexts/Context";

import ButtonBackHome from "../components/ButtonBackHome";
import ButtonValidateResult from "../components/ButtonValidateResult";
import ResultatPizzaComponent from "../components/ResultatPizzaComponent";
import MoodLogo from "../assets/MoodLogo.png";

import "./ResultatPizza.css";

function ResultatPizza() {
  const { pizzaCategoryFilm } = useContext(Context);
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [randomMovie, setRandomMovie] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }&with_genres=${pizzaCategoryFilm}`
      )
      .then((res) => {
        setFilteredMovie(res.data.results);
      });
    setRandomMovie(
      filteredMovie[Math.floor(Math.random() * filteredMovie.length)]
    );
  }, []);

  console.warn(randomMovie);

  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <div className="resultat-pizza">
        <ResultatPizzaComponent />
      </div>
      <ButtonValidateResult buttoncolor="bouton-valider-resultat-pizza" />
      <ButtonBackHome />
    </div>
  );
}
export default ResultatPizza;
