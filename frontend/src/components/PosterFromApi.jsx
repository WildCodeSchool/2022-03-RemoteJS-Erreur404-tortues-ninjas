import React from "react";
import "./PosterFromApi.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ApiRequests({ totalUrlPosters }) {
  return (
    <div className="global">
      <div className="wrapper">
        <Carousel>
          {totalUrlPosters.map((poster) => (
            <div key={poster}>
              <img className="item" src={poster} alt="movie poster" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ApiRequests;
