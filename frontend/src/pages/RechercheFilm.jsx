import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import genres from "../data/genres";
import DataPizza from "../data/DataPizza";
import genresPizza from "../data/genresPizzas";
import Title from "../components/Title";
import MoodLogo from "../assets/moodlogo.png";
import ButtonBackHome from "../components/ButtonBackHome";
import PosterFromApi from "../components/PosterFromApi";
import GenreButton from "../components/GenreButtons";

function RechercheFilm() {
  const [movie, setMovie] = useState([]);
  const [filteredPizzas, setfilteredPizzas] = useState([]);
  const [posters, setPosters] = useState([]);
  const [genreId, setGenreID] = useState(0);
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
  }, [genreId]);

  useEffect(() => {
    setGenreID(choice === "pizza" ? 1 : 28);
  }, []);

  useEffect(() => {
    setfilteredPizzas(DataPizza.filter((pizza) => pizza.category === genreId));
  }, []);

  useEffect(() => {
    setPosters(choice === "film" ? totalUrlPosters : posterPizzaArr);
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
      {genresData[choice].map((genre, index) => (
        <GenreButton
          genres={genre}
          setGenreID={setGenreID}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          choice={choice}
        />
      ))}
      <div>
        <PosterFromApi posters={posters} />
      </div>
      <ButtonBackHome />
    </div>
  );
}

export default RechercheFilm;
