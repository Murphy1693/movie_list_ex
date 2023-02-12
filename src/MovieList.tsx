import { Movie } from "../types";
import MovieListEntry from "./MovieListEntry";

type MovieListProps = {
  movies: Movie[];
};

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {movies.map((movie) => {
        return <MovieListEntry movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
