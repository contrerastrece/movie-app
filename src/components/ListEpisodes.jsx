import React from "react";
import useFetch from "../hook/useFetch";

const ListEpisodes = ({ id, season }) => {
  const apiUrl = `/tv/${id}/season/${season}`;
  const { data, loading } = useFetch(apiUrl);
  console.log(data,"🟢");
  return (
    <div className="p-2">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <ul className="grid grid-cols-2 gap-2">
            {data.episodes.map((episode) => (
              <li key={episode.key}>
                <img
                  src={                   
                       `https://image.tmdb.org/t/p/w300/${
                          episode.still_path
                        }`
                  }
                  alt={episode.name}
                  className="rounded-lg "
                />
                <p>
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
