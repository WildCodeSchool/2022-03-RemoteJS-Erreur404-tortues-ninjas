import React from "react";
import genres from "../data/genres";
import "./GenreButtons.css";

function GenreButton({ setGenreID }) {
  return (
    <div className="flex items-center justify-center buttons-genres-css">
      {genres.map((genre) => {
        return (
          <button
            className="button-genre-css"
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
