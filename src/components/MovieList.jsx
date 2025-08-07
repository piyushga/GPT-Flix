import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("Movies in Movie List: ", movies);
  return (
    <div className="p-4">
      <h1 className="text-3xl pb-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll space-x-3 snap-x scroll-smooth">
        <div className="flex gap-3">
          {movies.map((movie) => (
            <MovieCard key={movie.id} image={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
