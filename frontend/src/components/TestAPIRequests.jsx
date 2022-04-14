import axios from "axios";
import { useState, useEffect } from "react";
import "@components/TestAPIRequests.css";

function ApiRequests() {
  const url = "https://image.tmdb.org/t/p/w500";
  const [movie, setMovie] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/500?api_key=00509154781d3cc584842a62f7f632c2`
      )
      .then((res) => setMovie(res.data));
  }, []);

  return (
    <div className="global">
      <div className="caroussel">
        <div className="movie-card">
          <img src={url + movie.poster_path} alt="movie poster" />
        </div>
      </div>
    </div>
  );
}

export default ApiRequests;
