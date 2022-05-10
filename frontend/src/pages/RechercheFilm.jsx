import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import genres from "../data/genres";
import genresPizza from "../data/genresPizzas";
import { Context } from "../contexts/Context";

import Title from "../components/Title";
import MoodLogo from "../assets/moodlogo.png";
import ButtonBackHome from "../components/ButtonBackHome";
import PosterFromApi from "../components/PosterFromApi";
import GenreButton from "../components/GenreButtons";

import "../components/GenreButtons.css";
import "../components/ButtonValidateResult.css";

function RechercheFilm() {
  const { choice } = useParams();
  const { filteredPizzas, movie, handleGenreId } = useContext(Context);
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
        totalUrlPosters={totalUrlPosters}
        posterPizzaArr={posterPizzaArr}
        choice={choice}
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

export default RechercheFilm;
