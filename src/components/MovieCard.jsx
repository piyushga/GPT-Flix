import { MOVIE_IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ image }) => {
  return (
    <div className="w-40">
      <img alt="Movie Image" src={MOVIE_IMG_CDN_URL + image} />
    </div>
  );
};

export default MovieCard;
