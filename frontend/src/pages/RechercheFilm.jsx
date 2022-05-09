import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import genres from "../data/genres";
import DataPizza from "../data/DataPizza";
import genresPizza from "../data/genresPizzas";

import Title from "../components/Title";
import MoodLogo from "../assets/moodlogo.png";
import ButtonBackHome from "../components/ButtonBackHome";
import PosterFromApi from "../components/PosterFromApi";
import GenreButton from "../components/GenreButtons";
import ResultatFilmComponent from "../components/ResultatFilmComponent";

import "../components/GenreButtons.css";
import "../components/ButtonValidateResult.css";

function RechercheFilm() {
  const [movie, setMovie] = useState([]);
  const [filteredPizzas, setfilteredPizzas] = useState([]);
  const [genreId, setGenreID] = useState(0);
  const [onePoster, setOnePoster] = useState({});
  const { choice } = useParams();
  const genresData = {
    film: genres,
    pizza: genresPizza,
  };
  const posterArray = movie.map((element) => element.poster_path);
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const totalUrlPosters = posterArray.map((poster) => imageUrl + poster);
  const posterPizzaArr = filteredPizzas.map(
    (filteredPizza) => filteredPizza.image
  );

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }&with_genres=${genreId}`
      )
      .then((res) => {
        setMovie(res.data.results);
      });
    setfilteredPizzas(DataPizza.filter((pizza) => pizza.category === genreId));
  }, [genreId]);

  useEffect(() => {
    setGenreID(choice === "pizza" ? 0 : 28);
  }, []);

  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <Title
        cls="titre"
        text={
          choice === "film"
            ? "Quel film souhaites-tu regarder ?"
            : "Quelle pizza souhaites-tu manger ? "
        }
      />
      <div className="buttons-genres-css">
        {genresData[choice].map((genre, index) => (
          <GenreButton
            genres={genre}
            setGenreID={setGenreID}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            choice={choice}
          />
        ))}
      </div>
      <PosterFromApi
        totalUrlPosters={totalUrlPosters}
        posterPizzaArr={posterPizzaArr}
        choice={choice}
        setOnePoster={setOnePoster}
      />
      <Link
        to={`/resultat/${choice}`}
        element={<ResultatFilmComponent onePoster={onePoster} />}
        id="recherche-link"
      >
        <button
          type="button"
          id={
            choice === "film"
              ? "bouton-valider-resultat-film"
              : "bouton-valider-resultat-pizza"
          }
        >
          Je choisis {choice === "film" ? "ce" : "cette"} {choice}
        </button>
      </Link>
      <ButtonBackHome />
    </div>
  );
}

export default RechercheFilm;
