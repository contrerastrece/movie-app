import React from "react";
import UpcomingMovies from "../components/UpcomingMovies";
import Categories from "../components/Categories";
import TopRated from "../components/TopRated";
import WatchNow from "../components/WatchNow";

const Movies = () => {
  return (
    <div className="p-4 pb-14">
      <Categories type={"movie"} />
      <TopRated mediaType={"movie"} />
      <UpcomingMovies mediaType={"movie"} />
      <WatchNow mediaType={"movie"} />
    </div>
  );
};

export default Movies;
