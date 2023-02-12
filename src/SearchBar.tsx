import { useState } from "react";
import { Movie } from "../types";
import { getMovies } from "./App";

type SearchBarType = {
  setMovies: (movies: Movie[]) => void;
};

const SearchBar = ({ setMovies }: SearchBarType) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <form className="flex justify-between">
      <input
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
        className="mr-4 bg-[#575757]"
      ></input>
      <button
        onClick={(e) => {
          e.preventDefault();
          getMovies(searchQuery, (data) => {
            console.log(data);
            setMovies(data);
          });
        }}
        className="mr-auto text-[#ffff00]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
