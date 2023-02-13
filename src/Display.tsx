import { Movie } from "../types";

type DisplayProps = {
  movie?: Movie;
};

const Display = ({ movie }: DisplayProps) => {
  return (
    <div className="hidden text-center font-serif text-xl font-bold italic md:block">
      <span className="text-4xl">{movie?.title}</span>
      <div className="hidden md:flex md:w-full">
        <img
          className="w-[300px] py-8"
          src={"https://image.tmdb.org/t/p/w300" + movie?.poster_path}
        ></img>
      </div>
    </div>
  );
};

export default Display;
