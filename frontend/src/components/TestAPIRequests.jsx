import axios from "axios";
import { useState, useEffect } from "react";
import "@components/TestAPIRequests.css";

function ApiRequests() {
  const url = "https://image.tmdb.org/t/p/w500";
  const [movie, setMovie] = useState("");
  function randomId(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${randomId(500, 550)}?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }`
      )
      .then((res) => setMovie(res.data));
  }, []);

  return (
    <div className="global">
      <div className="movie-card">
        <img src={url + movie.poster_path} alt="movie poster" />
      </div>
    </div>
  );
}

export default ApiRequests;
