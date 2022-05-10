import React, { useContext } from "react";
import "./PosterFromApi.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Context } from "../contexts/Context";

function PosterFromApi({ totalUrlPosters, posterPizzaArr, choice, search }) {
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
          {posterData[choice]
            .filter((poster) =>
              poster.title.toUpperCase().includes(search.toUpperCase())
            )
            .map((poster) => (
              <img
                key={poster.title}
                className="item"
                src={`https://image.tmdb.org/t/p/w500/${poster.poster_path}`}
                alt="movie poster"
              />
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default PosterFromApi;
