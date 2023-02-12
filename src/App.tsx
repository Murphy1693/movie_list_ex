import { useState, useEffect, useMemo } from "react";
import { Movie } from "../types";
import "./style.css";
import MovieList from "./MovieList";
import axios from "axios";
import { x } from "../sample";

const getMovies = (title: string, callback: (data: any) => void) => {
  axios.get(`/search/${title}`).then(callback).catch();
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
      <div className="flex justify-between">
        <input className="mr-4 bg-[#575757]"></input>
        <div className="mr-auto text-[#ffff00]">Search</div>
      </div>
      <div className="">
        <div className="pt-6">Display243</div>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
