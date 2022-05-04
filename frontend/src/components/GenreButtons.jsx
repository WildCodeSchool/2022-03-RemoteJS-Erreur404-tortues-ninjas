import React from "react";
import "./GenreButtons.css";

function GenreButton({ setGenreID, genres }) {
  return (
    <div className="buttons-genres-css">
      <button
        className="button-genre-css"
        id="bg-button-genre"
        type="button"
        onClick={() => setGenreID(genres.id)}
      >
        {genres.name}
      </button>
    </div>
  );
}
export default GenreButton;
