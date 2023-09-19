import React from "react";
import useFetch from "../hook/useFetch";
import NoImage from "../assets/images/NoImage.jpg"

const ListEpisodes = ({ id, season }) => {
  const apiUrl = `/tv/${id}/season/${season}`;
  const { data, loading } = useFetch(apiUrl); 
  // console.log(data,"🟢");
  return (
    <div className="p-2">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {data.episodes.map((episode) => (
              <li key={episode.id}>
                <img
                  src={episode.still_path?                   
                       `https://image.tmdb.org/t/p/w300${
                          episode.still_path
                        }` : NoImage
                  }
                  alt={episode.name}
                  className="rounded-lg "
                />
                <p className="text-[0.5rem]">
                  {episode.episode_number} - {episode.name}
                  </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ListEpisodes;
