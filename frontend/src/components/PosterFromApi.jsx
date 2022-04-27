import React from "react";
import "./PosterFromApi.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ApiRequests({ totalUrlPosters }) {
  return (
    <div className="global">
      <div className="wrapper">
        <Carousel>
          <div>
            <img className="item" src={totalUrlPosters[0]} alt="movie poster" />
          </div>
          <div>
            <img className="item" src={totalUrlPosters[1]} alt="movie poster" />
          </div>
          <div>
            <img className="item" src={totalUrlPosters[2]} alt="movie poster" />
          </div>
          <div>
            <img className="item" src={totalUrlPosters[3]} alt="movie poster" />
          </div>
          <div>
            <img className="item" src={totalUrlPosters[4]} alt="movie poster" />
          </div>
          <div>
            <img className="item" src={totalUrlPosters[5]} alt="movie poster" />
          </div>
          <div>
            <img className="item" src={totalUrlPosters[6]} alt="movie poster" />
          </div>
          <div>
            <img className="item" src={totalUrlPosters[7]} alt="movie poster" />
          </div>
          <div>
            <img className="item" src={totalUrlPosters[8]} alt="movie poster" />
          </div>
          <div>
            <img className="item" src={totalUrlPosters[9]} alt="movie poster" />
          </div>
          <div>
            <img
              className="item"
              src={totalUrlPosters[10]}
              alt="movie poster"
            />
          </div>
          <div>
            <img
              className="item"
              src={totalUrlPosters[11]}
              alt="movie poster"
            />
          </div>
          <div>
            <img
              className="item"
              src={totalUrlPosters[12]}
              alt="movie poster"
            />
          </div>
          <div>
            <img
              className="item"
              src={totalUrlPosters[13]}
              alt="movie poster"
            />
          </div>
          <div>
            <img
              className="item"
              src={totalUrlPosters[14]}
              alt="movie poster"
            />
          </div>
          <div>
            <img
              className="item"
              src={totalUrlPosters[15]}
              alt="movie poster"
            />
          </div>
          <div>
            <img
              className="item"
              src={totalUrlPosters[16]}
              alt="movie poster"
            />
          </div>
          <div>
            <img
              className="item"
              src={totalUrlPosters[17]}
              alt="movie poster"
            />
          </div>
          <div>
            <img
              className="item"
              src={totalUrlPosters[18]}
              alt="movie poster"
            />
          </div>
          <div>
            <img
              className="item"
              src={totalUrlPosters[19]}
              alt="movie poster"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ApiRequests;
