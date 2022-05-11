import React from "react";
import "./GenreButtons.css";

function GenreButton({ handleGenreId, genres }) {
  return (
    <div>
      <button
        className="button-genre-css"
        id="bg-button-genre"
        type="button"
        onClick={() => handleGenreId(genres.id)}
      >
        {genres.name}
      </button>
    </div>
  );
}
export default GenreButton;
