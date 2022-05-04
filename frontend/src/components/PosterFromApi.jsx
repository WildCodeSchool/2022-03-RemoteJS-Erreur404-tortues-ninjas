import React from "react";
import "./PosterFromApi.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ApiRequests({ posters }) {
  return (
    <div className="global">
      <div className="wrapper">
        <Carousel>
          {posters.map((poster) => (
            <img
              key={poster}
              className="item"
              src={poster}
              alt="movie poster"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ApiRequests;
