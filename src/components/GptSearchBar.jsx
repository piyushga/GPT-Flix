import React from "react";
import { useSelector } from "react-redux";
import translations from "../utils/translations";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[5%] flex justify-center">
      <form className="bg-black/80  grid grid-cols-12 w-1/2">
        <input
          type="text"
          placeholder={translations[langKey].search_placeholder}
          className="p-4 bg-white m-2 col-span-9 rounded"
        />
        <button className="text-white bg-red-700 m-2 p-4 rounded col-span-3">
          {translations[langKey].search_button}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
