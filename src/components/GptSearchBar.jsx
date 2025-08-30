import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[5%] flex justify-center">
      <form className="bg-black/80  grid grid-cols-12 w-1/2">
        <input
          type="text"
          placeholder="What would you like to watch today"
          className="p-4 bg-white m-2 col-span-9 rounded"
        />
        <button className="text-white bg-red-700 m-2 p-4 rounded col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
