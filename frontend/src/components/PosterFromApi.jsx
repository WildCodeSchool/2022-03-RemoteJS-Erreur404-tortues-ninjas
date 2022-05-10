import React from "react";
import "./PosterFromApi.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function PosterFromApi({
  totalUrlPosters,
  posterPizzaArr,
  choice,
  setOnePoster,
}) {
  const posterData = {
    film: totalUrlPosters,
    pizza: posterPizzaArr,
  };

  return (
    <div className="global">
      <div className="wrapper">
        <Carousel
          onChange={(currentIndex, data) =>
            setOnePoster({ currentIndex, data })
          }
        >
          {posterData[choice].map((poster) => (
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

export default PosterFromApi;
