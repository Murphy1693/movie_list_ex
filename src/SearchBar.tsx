import { useState } from "react";
import { Movie } from "../types";
import { getMovies } from "./App";

type SearchBarType = {
  setMovies: (movies: Movie[]) => void;
};

const SearchBar = ({ setMovies }: SearchBarType) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <form className="flex justify-center md:justify-end">
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
          className=" font-bold text-yellow-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
