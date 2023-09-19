import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";
import Credits from "../components/Credits";
import Similar from "../components/Similar";
import Trailer from "../components/Trailer";
import Recomendations from "../components/Recomendations";
import ListEpisodes from "../components/ListEpisodes";
import Points from "../components/Points";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "react-circular-progressbar/dist/styles.css";
import "../assets/css/carousel.css";

const Detail = () => {
  const { media_type, id } = useParams();
  const urlDetails = `${media_type}/${id}`;
  const { data, loading } = useFetch(urlDetails);
  const history = useNavigate();
  console.log(data, "🎬🎇");

  const [season, setSeason] = useState(1);

  const Loader = () => {
    return (
      <SkeletonTheme
        baseColor="#6E707A"
        highlightColor="rgba(232, 232, 232, 0.25)"
      >
        <Skeleton width={"90%"} height={"500px"} duration={0.5} containerClassName="flex justify-center items-center p-2"/>
        <Skeleton width={"90%"} height={"10px"} duration={0.5} count={3} containerClassName="flex flex-col justify-center items-center p-2 gap-2"  inline />
      </SkeletonTheme>
    );
  };

  return (
    <div className="pb-16">
      {loading ? (
        <Loader/>
      ) : (
        <>
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
              alt={data?.title || data?.name}
              className="object-cover object-center  w-full  top-0"
              loading="lazy"
            />
            {/* Shadow */}
            <div className="absolute w-full top-0 left-0 h-full shadow-carousel"></div>

            {/* Circle Average */}
            <div className="w-[3rem] absolute bottom-4 right-4 font-bold ">
              <Points data={data} />
            </div>

            {/* btn Play Trailer */}
            <div className="absolute bottom-4 left-4 border cursor-pointer">
              <Trailer id={id} mediaType={media_type} />
            </div>
          </div>
          <p>{data?.overview}</p>

          {media_type === "tv" && (
            <>
              <div className="relative flex justify-between p-2">
                <select
                  name=""
                  id=""
                  className="border p-2 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300 text-black"
                  onChange={(e) => setSeason(e.target.value)}
                  defaultValue={season}
                >
                  {(() => {
                    const numSeasons = parseInt(data.number_of_seasons);
                    const options = [];

                    for (let i = 0; i < numSeasons; i++) {
                      options.push(
                        <option
                          key={i}
                          value={i + 1}
                          className="bg-gray-100 hover:bg-gray-200 text-black"
                        >
                          Season {i + 1}
                        </option>
                      );
                    }

                    return options;
                  })()}
                </select>

                {/* btn Play Trailer */}
                <div className="cursor-pointer">
                  <Trailer id={id} mediaType={media_type} />
                </div>
              </div>

              {/* <SeasonTv season={season} id={id} /> */}
              <ListEpisodes season={season} id={id} />
            </>
          )}
        </>
      )}

      <Recomendations id={id} mediaType={media_type} />
      <Similar id={id} mediaType={media_type} />
      <Credits id={id} mediaType={media_type} />

      <button onClick={() => history(-1)}>Volver</button>
    </div>
  );
};

export default Detail;
