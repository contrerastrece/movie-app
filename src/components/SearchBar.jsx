import  '../assets/css/root.css'
import React from "react";
import { HiSearch } from 'react-icons/hi';

const SearchBar = () => {
  return (
    <div className="w-full   p-0 ">
      <div className="flex rounded-full m-5 overflow-hidden  bg-secondary2">
        <div className="flex  w-6 items-center bg-secondary2 justify-center ml-2 ">
         <HiSearch/>
        </div>
        <input
          type="text"
          className="w-full bg-secondary2 pl-2 text-white outline-0"
          placeholder="Search for movies, tv shows..."
          id=""
        />
      </div>
    </div>
  );
};

export default SearchBar;
