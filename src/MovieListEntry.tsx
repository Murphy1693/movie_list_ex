import { useState } from "react";
import { Movie } from "../types";

type MovieListEntryProps = {
  movie: Movie;
  handleWatched: (id: Movie["id"]) => void;
};

const MovieListEntry = ({ movie, handleWatched }: MovieListEntryProps) => {
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
          ? "relative flex max-w-3xl  overflow-hidden transition-[height] md:basis-[45%]"
          : "relative flex max-w-3xl  overflow-hidden transition-[height] md:basis-[45%]"
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
        <pre className="font-serif text-[14px] font-bold">
          {movie.release_date}
        </pre>
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
      <div
        onMouseOver={(e) => {
          e.stopPropagation();
        }}
        className="flex items-center"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleWatched(movie.id);
          }}
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          className={
            movie.watched
              ? "flex cursor-pointer select-none border-2 border-yellow-300 p-1 font-serif text-[10px] font-bold uppercase text-yellow-300"
              : "flex cursor-pointer select-none border-2 border-white p-1 font-serif text-[10px] uppercase text-white opacity-50"
          }
        >
          watched
          {/* <button
          style={{
            writingMode: "vertical-lr",
          }}
        >
          Watched
        </button> */}
        </div>
      </div>
    </div>
  );
};

export default MovieListEntry;
