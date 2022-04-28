import React from "react";
import "./PosterFromApi.css";

function ApiRequests({ poster }) {
  return (
    <div className="global">
      <div className="movie-card">
        <img className="poster" src={poster} alt="movie poster" />
      </div>
    </div>
  );
}

export default ApiRequests;
