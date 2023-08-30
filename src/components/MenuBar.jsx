import React from "react";
import { BiHomeAlt2, BiMovie, BiSearch } from "react-icons/bi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import "./menuBar.css";
import { Link } from "react-router-dom";
const MenuBar = () => {
  return (
    <div className="flex menuBar fixed bottom-0 left-0 right-0 p-3 justify-around">
      <Link to="/">
        <BiHomeAlt2 />
      </Link>
      <Link to="../pages/Search">
        <BiSearch />
      </Link>
      <Link to="../pages/Movies">
        <BiMovie />
      </Link>
      <Link to="../pages/Series">
        <PiTelevisionSimpleBold />
      </Link>
    </div>
  );
};

export default MenuBar;
