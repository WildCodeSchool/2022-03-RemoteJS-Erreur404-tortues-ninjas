import React from "react";
import genres from "../data/genres";

function GenreButton({ setGenreID }) {
  return (
    <div className="flex items-center justify-center">
      {genres.map((genre) => {
        return (
          <button
            className="style-button"
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
