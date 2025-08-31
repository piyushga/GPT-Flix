import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import translations from "../utils/translations";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang);
  return (
    movies.nowPlayingMovies &&
    movies.upcomingMovies &&
    movies.popularMovies && (
      <div className="bg-black">
        <div className="-mt-80">
          <MovieList
            title={translations[langKey].now_playing}
            movies={movies?.nowPlayingMovies}
          />
          <MovieList
            title={translations[langKey].upcoming}
            movies={movies?.upcomingMovies}
          />
          <MovieList
            title={translations[langKey].popular}
            movies={movies?.popularMovies}
          />

          <MovieList
            title={translations[langKey].trending}
            movies={movies?.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
