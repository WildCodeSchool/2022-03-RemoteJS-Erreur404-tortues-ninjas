import React from "react";
import genres from "../data/genres";
import "./GenreButtons.css";

function GenreButton({ setGenreID }) {
  return (
    <div className="buttons-genres-css">
      {genres.map((genre) => {
        return (
          <button
            className="button-genre-css"
            id="bg-button-genre"
            type="button"
            onClick={() => setGenreID(genre.id)}
          >
            {genre.name}
          </button>
        );
      })}
    </div>
  );
}
export default GenreButton;
