import { RxInfoCircled } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";
import { useSelector } from "react-redux";
import translations from "../utils/translations";

const VideoTitle = ({ title, overview }) => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div
      className="
        text-white
        px-6 sm:px-10 lg:px-20
        pt-16 sm:pt-24 lg:pt-48
        relative lg:absolute lg:inset-0
        min-h-[60vh] sm:min-h-[70vh] lg:min-h-0
        mb-12 sm:mb-16 lg:mb-0
        z-10
      "
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-sm">{title}</h1>

      {/* Overview */}
      <p className="py-4 text-base sm:text-lg max-w-xl sm:max-w-2xl lg:w-1/3">
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        <button className="flex items-center gap-2 py-2 px-6 sm:px-8 lg:px-10 text-base sm:text-lg bg-white text-black rounded-sm hover:bg-white/80">
          <FaPlay />
          {translations[langKey].play}
        </button>

        <button className="flex items-center gap-2 bg-gray-600/60 text-base sm:text-lg font-bold py-2 px-6 sm:px-8 lg:px-10 rounded-md">
          <RxInfoCircled />
          {translations[langKey].more_info}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
