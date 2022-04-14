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
    <div className="movieCard">
      <h2>bonjour je fais un test</h2>
      <div>{movie.original_title}</div>
      <div>{movie.overview}</div>
      <div>
        <img src={url + movie.poster_path} alt="movie poster" />
      </div>
    </div>
  );
}

export default ApiRequests;
