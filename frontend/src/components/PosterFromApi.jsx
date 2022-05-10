import React, { useContext } from "react";
import "./PosterFromApi.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Context } from "../contexts/Context";

function PosterFromApi({ totalUrlPosters, posterPizzaArr, choice }) {
  const posterData = {
    film: totalUrlPosters,
    pizza: posterPizzaArr,
  };
  const { handleOnePoster } = useContext(Context);
  return (
    <div className="global">
      <div className="wrapper">
        <Carousel
          onChange={(currentIndex, data) =>
            handleOnePoster({ currentIndex, data })
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
