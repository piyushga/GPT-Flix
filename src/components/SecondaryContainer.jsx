import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies &&
    movies.upcomingMovies &&
    movies.popularMovies && (
      <div className="bg-black">
        <div className="-mt-80">
          <MovieList
            title={"Now Playing Movies"}
            movies={movies?.nowPlayingMovies}
          />
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />

          <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
