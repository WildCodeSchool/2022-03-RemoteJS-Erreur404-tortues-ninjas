import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "../components/Title";
import MoodLogo from "../assets/MoodLogo.png";
import ButtonBackHome from "../components/ButtonBackHome";
import PosterFromApi from "../components/PosterFromApi";
import GenreButton from "../components/GenreButtons";
import Filter from "../components/Form/Filter";

function RechercheFilm() {
  const [movie, setMovie] = useState([]);
  const [genreId, setGenreID] = useState(28);
  const [search, setSearch] = useState("");

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
  return (
    <div>

      <h1>Rechercher un film</h1>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <Title cls="titre" text="Quel film souhaites-tu regarder ?" />
        <Filter search={search} handleSetSearch={setSearch} />
      <GenreButton setGenreID={setGenreID} />
      <div>
        {movie
          .filter((poster) =>
            poster.title.toUpperCase().includes(search.toUpperCase())
          )
          .map((poster) => (
            <PosterFromApi key={poster} poster={poster} />
          ))}
       </div>
      <GenreButton setGenreID={setGenreID} />
      <div>
        <PosterFromApi totalUrlPosters={totalUrlPosters} />
      </div>
      <ButtonBackHome />
    </div>
  );
}

export default RechercheFilm;
