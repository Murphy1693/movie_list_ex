import { useEffect, useMemo, useReducer, useState } from "react";
import { Movie } from "../types";
import FiltersContainer from "./FiltersContainer";
import MovieListEntry from "./MovieListEntry";

type MovieListProps = {
  movies: Movie[];
};

type FilterMethods = {
  value: boolean | string;
  callback: (movies: Movie[]) => Movie[];
};

export type Filters = {
  [key: string]: FilterMethods;
};

export type FiltersAction = {
  type: "watched" | "unwatched" | "searchQuery";
  searchValue?: string;
};

type MoviesGraph = {
  [id: number]: Movie;
};

let initialFilters: Filters = {
  watched: {
    value: false,
    callback: (movies) => {
      return movies.filter((movie) => {
        return movie.watched;
      });
    },
  },
  unwatched: {
    value: false,
    callback: (movies) => {
      return movies.filter((movie) => {
        return !movie.watched;
      });
    },
  },
  searchQuery: {
    value: "",
    callback: function (movies) {
      return movies.filter((movie) => {
        if (typeof this.value === "string") {
          return (
            movie.title.toUpperCase().indexOf(this.value.toUpperCase()) !== -1
          );
        } else {
          return movie;
        }
      });
    },
  },
};

let filtersReducer = (state: Filters, action: FiltersAction) => {
  if (action.type === "watched") {
    return {
      ...state,
      watched: { ...state.watched, value: !state.watched.value },
    };
  } else if (action.type === "unwatched") {
    return {
      ...state,
      unwatched: { ...state.unwatched, value: !state.unwatched.value },
    };
  } else if (
    action.type === "searchQuery" &&
    action.searchValue !== undefined
  ) {
    return {
      ...state,
      searchQuery: { ...state.searchQuery, value: action.searchValue },
    };
  }
  return state;
};

type FiltersReducer = (state: Filters, action: FiltersAction) => Filters;

let moviesReducer = (movies: Movie[], filters: Filters) => {
  let newMovies: Movie[] = [...movies];
  for (const k in filters) {
    if (filters[k].value) {
      newMovies = filters[k].callback(newMovies);
    }
  }
  let moviesGraph: MoviesGraph = {};
  newMovies.forEach((movie) => {
    moviesGraph[movie.id] = movie;
  });
  return moviesGraph;
};

const MovieList = ({ movies }: MovieListProps) => {
  const [filters, filtersDispatch] = useReducer<FiltersReducer>(
    filtersReducer,
    initialFilters
  );
  const [filteredMoviesGraph, setFilteredMovies] = useState<MoviesGraph>({});
  // const filteredMovies = useMemo(() => {
  //   console.log("filtering");
  // let newMovies = [...movies];
  // for (const k in filters) {
  //   if (filters[k].value) {
  //     newMovies = filters[k].callback(newMovies);
  //   }
  // }
  // setFilteredMovies(newMovies);
  // }, [movies, filters]);

  useEffect(() => {
    let newMovies: Movie[] = [...movies];
    for (const k in filters) {
      if (filters[k].value) {
        newMovies = filters[k].callback(newMovies);
      }
    }
    let moviesGraph: MoviesGraph = {};
    newMovies.forEach((movie) => {
      moviesGraph[movie.id] = movie;
    });
    setFilteredMovies(moviesGraph);
  }, [movies, filters]);

  const handleWatched = (id: Movie["id"]) => {
    let movieGraphCopy = { ...filteredMoviesGraph };
    movieGraphCopy[id].watched = !movieGraphCopy[id].watched;
    setFilteredMovies(movieGraphCopy);
  };

  return (
    <div className="flex max-w-2xl flex-col md:max-w-6xl">
      <FiltersContainer
        filters={filters}
        filtersDispatch={filtersDispatch}
      ></FiltersContainer>
      <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:justify-between">
        {Object.values(moviesReducer(movies, filters)).map((movie) => {
          return (
            <MovieListEntry
              handleWatched={handleWatched}
              key={movie.id}
              movie={movie}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
