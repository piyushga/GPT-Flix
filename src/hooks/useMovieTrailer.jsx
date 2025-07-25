import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const mainMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("Data in Video background: ", json);
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    console.log("Trailer data: ", trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    mainMovieTrailer();
  }, []);
};

export default useMovieTrailer;
