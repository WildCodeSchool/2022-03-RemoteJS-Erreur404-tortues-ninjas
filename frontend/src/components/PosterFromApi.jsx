import React from "react";
import "./PosterFromApi.css";

function ApiRequests({ posterArray }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const totalUrlPosters = posterArray.map((poster) => imageUrl + poster);

  return (
    <div className="global">
      <div className="movie-card">
        <img className="poster" src={totalUrlPosters[0]} alt="movie poster" />
      </div>
    </div>
  );
}

export default ApiRequests;
