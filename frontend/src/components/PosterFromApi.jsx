import React from "react";
import "./PosterFromApi.css";

function ApiRequests({ poster }) {
  return (
    <div className="global">
      <div className="wrapper">
        <img className="item" src={poster} alt="movie poster" />
      </div>
    </div>
  );
}

export default ApiRequests;
