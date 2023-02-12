import { Movie } from "../types";

type MovieListEntryProps = {
  movie: Movie;
};

const MovieListEntry = ({ movie }: MovieListEntryProps) => {
  return <div className="h-12 border-2 border-white">{movie.title}</div>;
};

export default MovieListEntry;
