import { useState } from "react";
import { Movie } from "../types";

type MovieListEntryProps = {
  movie: Movie;
};

const MovieListEntry = ({ movie }: MovieListEntryProps) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={
        open
          ? "relative flex max-w-3xl  overflow-hidden transition-[height] md:basis-2/5"
          : "relative flex h-20 max-w-3xl  overflow-hidden transition-[height] md:basis-2/5"
      }
    >
      {movie.poster_path ? (
        <img
          className={
            open
              ? "w-[8rem] self-center transition-[width]"
              : "w-[5rem] self-center transition-[width]"
          }
          src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
        ></img>
      ) : null}
      <div className="mx-4 flex basis-full flex-col gap-2 text-center">
        <span
          className={
            hover
              ? "max-w-[184px] flex-wrap self-center text-center font-serif font-bold italic underline"
              : "max-w-[184px] flex-wrap self-center text-center font-serif font-bold italic"
          }
        >
          {movie.title}
        </span>
        {/* <button className="mt-auto font-serif text-sm">Show</button> */}
        <div
          className={
            open
              ? "m-auto max-w-lg justify-end overflow-auto text-left text-[12px]"
              : "hidden"
          }
        >
          <span className="max-w-[184px] flex-wrap">{movie.overview}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieListEntry;
