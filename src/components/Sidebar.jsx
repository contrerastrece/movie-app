import React from "react";
import { BiHomeAlt2, BiMovie, BiSearch } from "react-icons/bi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import ProfileGit from "./ProfileGit";

const Sidebar = () => {
  return (
    <div className=" flex flex-col w-64  h-screen overflow-scroll text-left  ">

      <div className="flex ml-0 items-center gap-4 mt-10 justify-center px-5 h-[5rem] ">
        <h1 className="text-center text-3xl font-extrabold text-primary">MovieApp</h1>
      </div>

      <NavLink
        to="/"
        className="flex ml-0  items-center gap-4 mt-10 px-5 h-[4rem]"
      >
        <BiHomeAlt2 />
        <div className=" text-xl font-semibold">Home</div>
      </NavLink>
      <NavLink
        to="/pages/Movies"
        className="flex ml-0  items-center gap-4  px-5 h-[4rem]"
      >
        <BiMovie />
        <div className=" text-xl font-semibold">Movies</div>
      </NavLink>
      <NavLink
        to="/pages/Series"
        className="flex ml-0  items-center gap-4  px-5 h-[4rem]"
      >
        <PiTelevisionSimpleBold />
        <div className="text-xl font-semibold ">TV Series</div>
      </NavLink>
      <ProfileGit/>
    </div>
  );
};

export default Sidebar;
