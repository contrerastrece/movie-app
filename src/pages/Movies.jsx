import React from "react";
import UpcomingMovies from "../components/UpcomingMovies";
import Categories from "../components/Categories";
import TopRated from "../components/TopRated";
import WatchNow from "../components/WatchNow";
import Providers from "../components/Providers";

const Movies = () => {
  return (
    <div className="p-4 pb-16">
      <Categories mediaType={"movie"} />
      <TopRated mediaType={"movie"} />
      <UpcomingMovies mediaType={"movie"} />
      <WatchNow mediaType={"movie"} />
      <Providers mediaType={"movie"} />
    </div>
  );
};

export default Movies;
