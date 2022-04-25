import { useState, useEffect } from "react";
import axios from "axios";
import Caroussel from "../components/Caroussel";
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
  }, []);
  const posterArray = movie.map((element) => element.poster_path);
  return (
    <div>
      <h1>Rechercher un film</h1>
      <GenreButton setGenreID={setGenreID} />
      <Caroussel posterArray={posterArray} />
    </div>
  );
}

export default RechercheFilm;
