import { useState, useEffect } from "react";
import { Movie } from "../types";
import "./style.css";
import MovieList from "./MovieList";
import { x } from "../sample";
import Display from "./Display";
import SearchBar from "./SearchBar";
import axios from "axios";
import Topbar from "./Topbar";

export const getMovies = (title: string, callback: (data: any) => void) => {
  axios
    .get(`/search/${title}`)
    .then((response) => {
      if (response.status === 200) {
        callback(response.data);
      }
    })
    .catch();
};

const App = () => {
  const [movies, setMovies] = useState<Movie[]>(x);
  const [view, setView] = useState(true); /* true Home | false My List // */

  // useEffect(() => {
  //   getMovies("batman", (response) => {
  //     setMovies(response.data);
  //   });
  // });

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#3d3d3d] to-[#1d1d1d] text-white">
      <div>
        <Topbar setView={setView} view={view} />
        <div className="mx-auto max-w-6xl flex-col p-6">
          <SearchBar setMovies={setMovies} />
          <Display movie={movies[0]} />
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default App;
