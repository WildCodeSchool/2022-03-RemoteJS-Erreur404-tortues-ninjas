import React, { useEffect, useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";

import genres from "../data/genres";
import genresPizza from "../data/genresPizzas";
import { Context } from "../contexts/Context";

import Title from "../components/Title";
import MoodLogo from "../assets/MoodLogo.png";
import ButtonBackHome from "../components/ButtonBackHome";
import PosterFromApi from "../components/PosterFromApi";
import GenreButton from "../components/GenreButtons";

import "../components/GenreButtons.css";
import "../components/ButtonValidateResult.css";

function Recherche() {
  const [search, setSearch] = useState("");
  const { choice } = useParams();
  const { filteredPizzas, movie, handleGenreId } = useContext(Context);
  const genresData = {
    film: genres,
    pizza: genresPizza,
  };

  const posterPizzaArr = filteredPizzas.map(
    (filteredPizza) => filteredPizza.image
  );

  useEffect(() => {
    handleGenreId(choice === "pizza" ? 0 : 28);
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
      <label htmlFor="search">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </label>
      <div className="buttons-genres-css">
        {genresData[choice].map((genre) => (
          <GenreButton
            genres={genre}
            handleGenreId={handleGenreId}
            choice={choice}
            key={genre.id}
          />
        ))}
      </div>
      <PosterFromApi
        totalUrlPosters={movie}
        posterPizzaArr={posterPizzaArr}
        choice={choice}
        search={search}
      />
      <Link to={`/resultat/${choice}`} id="recherche-link">
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

export default Recherche;
