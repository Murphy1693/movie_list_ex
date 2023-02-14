import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Movie } from "../types";

type DisplayProps = {
  movies: Movie[];
};

const wait = (ms: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

type psuedoScrollProps = (
  setChange: (change: boolean) => void,
  change: boolean,
  setIndex: (index: number) => void,
  index: number,
  arrLength: number
) => void;

const psuedoScroll: psuedoScrollProps = async (
  setChange,
  change,
  setIndex,
  index,
  arrLength
) => {
  setChange(true);
  await wait(1100);
  if (arrLength === index + 1) {
    setIndex(0);
  } else {
    setIndex(index + 1);
  }
  setChange(false);
};

const Display = ({ movies }: DisplayProps) => {
  const [change, setChange] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const z = useRef<NodeJS.Timeout | null>(null);

  let startRolling = function () {
    z.current = setTimeout(() => {
      psuedoScroll(
        setChange,
        change,
        setCarouselIndex,
        carouselIndex,
        movies.length
      );
    }, 3000);
  };

  useEffect(() => {
    startRolling();
    return () => {
      if (z.current) {
        clearTimeout(z.current);
      }
    };
  }, [carouselIndex]);

  return (
    <div className="relative m-auto hidden max-w-3xl overflow-hidden  text-center font-serif text-xl font-bold italic md:block">
      <div
        className={hover ? "" : "opacity-70"}
        onMouseOver={() => {
          setHover(true);
          if (z.current) {
            clearTimeout(z.current);
          }
        }}
        onMouseLeave={() => {
          setHover(false);
          startRolling();
        }}
        style={
          !change
            ? {
                display: "flex",
                width: "200%",
                height: "520px",
              }
            : {
                height: "520px",
                display: "flex",
                width: "200%",
                textAlign: "right",
                alignSelf: "right",
                transform: "translate(-50%)",
                transition: "transform",
                transitionDuration: ".5s",
              }
        }
      >
        <div className="w-1/2">
          <span
            className={
              hover
                ? "block text-center text-4xl underline"
                : "block text-center text-4xl"
            }
          >
            {movies[carouselIndex].title}
          </span>
          <div className="hidden py-8 text-center md:flex md:w-full">
            <img
              className="w-[300px]"
              src={
                "https://image.tmdb.org/t/p/w300" +
                movies[carouselIndex].poster_path
              }
            ></img>
            <div className="w-full pt-6 text-3xl">
              {movies[carouselIndex].release_date}
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <span className="block text-center text-4xl">
            {carouselIndex + 1 === movies.length
              ? movies[0].title
              : movies[carouselIndex + 1]?.title}
          </span>
          <div className="hidden py-8 text-center md:flex md:w-full">
            <img
              className="w-[300px]"
              src={
                "https://image.tmdb.org/t/p/w300" +
                (carouselIndex + 1 === movies.length
                  ? movies[0]?.poster_path
                  : movies[carouselIndex + 1]?.poster_path)
              }
            ></img>
            <div className="w-full pt-6 text-3xl">
              {carouselIndex + 1 === movies.length
                ? movies[0]?.release_date
                : movies[carouselIndex + 1]?.release_date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
