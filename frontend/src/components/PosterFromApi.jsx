import React, { useContext } from "react";
import "./PosterFromApi.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Context } from "../contexts/Context";

function PosterFromApi({ movies, pizzas, choice, search }) {
  const posterData = {
    film: movies,
    pizza: pizzas,
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
            .filter((poster) => {
              if (choice === "film")
                return poster.title
                  .toUpperCase()
                  .includes(search.toUpperCase());
              if (choice === "pizza")
                return poster.name.toUpperCase().includes(search.toUpperCase());
              return false;
            })
            .map((poster) => (
              <img
                key={poster.id}
                className="item"
                src={
                  choice === "film"
                    ? `https://image.tmdb.org/t/p/w500/${poster.poster_path}`
                    : poster.image
                }
                alt="movie poster"
              />
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default PosterFromApi;
