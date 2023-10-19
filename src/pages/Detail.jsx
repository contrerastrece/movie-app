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
        <Skeleton
          width={"90%"}
          height={"500px"}
          duration={0.5}
          containerClassName="flex justify-center items-center p-2"
        />
        <Skeleton
          width={"90%"}
          height={"10px"}
          duration={0.5}
          count={3}
          containerClassName="flex flex-col justify-center items-center p-2 gap-2"
          inline
        />
      </SkeletonTheme>
    );
  };

  return (
    <div className="pb-16">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="relative">
            <div className="relative border md:w-screen md:h-32">
              <div className="bg-cover bg-center h-auto relative">
                <div
                  className="border absolute bg-cover inset-0 "
                  style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/w780/${data.backdrop_path}")`,
                    objectFit: "cover",
                  }}
                ></div>
                {/* Capa de superposición */}
                <div className="absolute inset-0 bg-[#1e2732] opacity-70"></div>

                <div className="relative flex items-center justify-center md:w-[20rem]">
                  {/* <h1 className="text-white text-5xl ">Título de tu página</h1> */}
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                    alt={data?.title || data?.name}
                    className="object-cover object-center w-full top-0 md:z-10 border md:w-14"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Shadow */}
              <div className="absolute w-full top-0 left-0 h-full shadow-carousel"></div>
              
              {/* Circle Average */}
              <div className="absolute w-[3rem] bottom-4 right-4 font-bold md:hidden">
                <Points data={data} />
              </div>

              {/* btn Play Trailer */}
              <div className=" absolute w-[3rem] bottom-4 left-4 cursor-pointer md:hidden">
                <Trailer id={id} mediaType={media_type} />
              </div>
            </div>

            {/* info */}
            <div className="">
              <h2 className="md:text-4xl">{data.title}</h2>
              {/* Circle Average */}
              <div className="hidden lg:visible md:w-[3rem] font-bold ">
                <Points data={data} />
              </div>

              {/* btn Play Trailer */}
              <div className="hidden md:visible md:w-[3rem] md:bottom-4 md:left-4 md:cursor-pointer">
                <Trailer id={id} mediaType={media_type} />
              </div>
              <p className="">{data?.overview}</p>
              {/* Categories */}
            </div>
          </div>

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
