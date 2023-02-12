import { useState, useEffect, useMemo } from "react";
import { Movie } from "../types";
import "./style.css";
import MovieList from "./MovieList";
import { x } from "../sample";
import Display from "./Display";
import SearchBar from "./SearchBar";
import axios from "axios";

export const getMovies = (title: string, callback: (data: any) => void) => {
  axios
    .get(`/search/${title}`)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        callback(response.data);
      }
    })
    .catch();
};

const App = () => {
  const [movies, setMovies] = useState<Movie[]>(x);

  // useEffect(() => {
  //   getMovies("batman", (response) => {
  //     setMovies(response.data);
  //   });
  // });

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#3d3d3d] to-[#1d1d1d] p-6 text-white">
      <SearchBar setMovies={setMovies} />
      <Display movie={movies[0]}></Display>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
