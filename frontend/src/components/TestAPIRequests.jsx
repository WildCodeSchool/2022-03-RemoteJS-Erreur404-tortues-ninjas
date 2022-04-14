import axios from "axios";
import { useState, useEffect } from "react";

// const dataMovie = {
//   adult: false,
//   backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
//   belongs_to_collection: null,
//   budget: 63000000,
//   genres: [
//     {
//       id: 18,
//       name: "Drama",
//     },
//   ],
//   homepage: "http://www.foxmovies.com/movies/fight-club",
//   id: 550,
//   imdb_id: "tt0137523",
//   original_language: "en",
//   original_title: "Fight Club",
//   overview:
//     'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
//   popularity: 61.751,
//   poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
//   production_companies: [
//     {
//       id: 508,
//       logo_path: "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
//       name: "Regency Enterprises",
//       origin_country: "US",
//     },
//     {
//       id: 711,
//       logo_path: "/tEiIH5QesdheJmDAqQwvtN60727.png",
//       name: "Fox 2000 Pictures",
//       origin_country: "US",
//     },
//     {
//       id: 20555,
//       logo_path: "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
//       name: "Taurus Film",
//       origin_country: "DE",
//     },
//     {
//       id: 54051,
//       logo_path: null,
//       name: "Atman Entertainment",
//       origin_country: "",
//     },
//     {
//       id: 54052,
//       logo_path: null,
//       name: "Knickerbocker Films",
//       origin_country: "US",
//     },
//     {
//       id: 4700,
//       logo_path: "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
//       name: "The Linson Company",
//       origin_country: "US",
//     },
//   ],
//   production_countries: [
//     {
//       iso_3166_1: "DE",
//       name: "Germany",
//     },
//     {
//       iso_3166_1: "US",
//       name: "United States of America",
//     },
//   ],
//   release_date: "1999-10-15",
//   revenue: 100853753,
//   runtime: 139,
//   spoken_languages: [
//     {
//       english_name: "English",
//       iso_639_1: "en",
//       name: "English",
//     },
//   ],
//   status: "Released",
//   tagline: "Mischief. Mayhem. Soap.",
//   title: "Fight Club",
//   video: false,
//   vote_average: 8.4,
//   vote_count: 23858,
// };

function ApiRequests() {
  const url = "https://image.tmdb.org/t/p/w500";
  const [movie, setMovie] = useState("");

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/500?api_key=00509154781d3cc584842a62f7f632c2")
      .then((res) => res.data)
      .then((data) => setMovie(data));
  }, []); 


  return (
    <div>
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
