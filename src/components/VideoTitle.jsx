import { RxInfoCircled } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-48 px-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex gap-2">
        <button className="flex items-center gap-2 py-2 px-10 text-lg  bg-gray-600/60 text-white rounded-sm">
          <FaPlay />
          Play
        </button>

        <button className=" flex items-center gap-2 bg-gray-600/60 text-lg text-white font-bold py-2 px-10 rounded-md">
          <RxInfoCircled />
          info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
