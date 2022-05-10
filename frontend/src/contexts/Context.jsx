/* eslint-disable prettier/prettier */
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import DataPizza from "../data/DataPizza";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [onePoster, setOnePoster] = useState({});
  const [filteredPizzas, setfilteredPizzas] = useState([]);
  const [movie, setMovie] = useState([]);
  const [genreId, setGenreID] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }&with_genres=${genreId}`
      )
      .then((res) => {
        setMovie(res.data.results);
      });
    setfilteredPizzas(DataPizza.filter((pizza) => pizza.category === genreId));
  }, [genreId]);

  return (
    <Context.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        onePoster,
        setOnePoster,
        filteredPizzas,
        movie,
        setGenreID,
      }}
    >
      {children}
    </Context.Provider>
  );
}
