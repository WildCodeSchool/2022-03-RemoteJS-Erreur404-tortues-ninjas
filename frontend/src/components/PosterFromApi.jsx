import React from "react";
import "./PosterFromApi.css";

function ApiRequests({ poster }) {
  return (
    <div className="global">
      <div className="movie-card">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500/${poster.poster_path}`}
          alt="movie poster"
        />
      </div>
    </div>
  );
}

export default ApiRequests;
