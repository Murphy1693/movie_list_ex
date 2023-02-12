import { Movie } from "../types";
import MovieListEntry from "./MovieListEntry";

type MovieListProps = {
  movies: Movie[];
};

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
      {movies.map((movie) => {
        return <MovieListEntry key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
