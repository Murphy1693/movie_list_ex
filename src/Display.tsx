import { Movie } from "../types";

type DisplayProps = {
  movie: Movie;
};

const Display = ({ movie }: DisplayProps) => {
  return (
    <div className="hidden md:flex md:w-full">
      <img
        className="ml-auto w-[300px] py-8"
        src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
      ></img>
      <div className="ml-48 mr-auto text-center font-serif text-xl font-bold italic">
        <span>{movie.title}</span>
      </div>
    </div>
  );
};

export default Display;
