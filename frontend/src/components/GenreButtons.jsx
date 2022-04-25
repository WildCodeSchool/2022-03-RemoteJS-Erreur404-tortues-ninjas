import React from "react";
import genres from "../data/genres";

function GenreButton({ setGenreID }) {
  return (
    <div className="button">
      {genres.map((genre) => {
        return (
          <button type="button" onClick={setGenreID(genre.id)}>
            {genre.name}
          </button>
        );
      })}
    </div>
  );
}
export default GenreButton;
