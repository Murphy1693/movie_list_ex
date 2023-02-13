import { Movie } from "../types";
import Display from "./Display";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

type HomeProps = {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
};

const Home = ({ movies, setMovies }: HomeProps) => {
  return (
    <>
      <SearchBar setMovies={setMovies} />
      <Display movies={movies} />
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
