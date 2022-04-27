
import React from "react";
import ButtonBackHome from "../components/ButtonBackHome";
import { useState, useEffect } from "react";
import axios from "axios";
import PosterFromApi from "../components/PosterFromApi";
import GenreButton from "../components/GenreButtons";

function RechercheFilm() {
  const [movie, setMovie] = useState([]);
  const [genreId, setGenreID] = useState(28);

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
  const posterArray = movie.map((element) => element.poster_path);
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const totalUrlPosters = posterArray.map((poster) => imageUrl + poster);
  return (
    <div>
      <h1>Rechercher un film</h1>

      <ButtonBackHome />
      <GenreButton setGenreID={setGenreID} />
      <div>
        {totalUrlPosters.map((poster) => (
          <PosterFromApi key={poster} poster={poster} />
        ))}
      </div>
    </div>
  );
}

export default RechercheFilm;
