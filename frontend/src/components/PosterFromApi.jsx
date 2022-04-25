import React from "react";
import "./PosterFromApi.css";

function ApiRequests({ posterArray }) {
  // console.warn(posterArray);
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="global">
      <div className="movie-card">
        <img
          className="poster"
          src={imageUrl + posterArray[1]}
          alt="movie poster"
        />
      </div>
    </div>
  );
}

export default ApiRequests;
