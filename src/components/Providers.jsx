import React, { useState } from "react";
import useFetch from "../hook/useFetch";

const Providers = ({ mediaType }) => {
  const [providerId, setProviderId] = useState("");

  const apiUrl = `watch/providers/${mediaType}`;
  const { data, loading } = useFetch(apiUrl);
console.log(data);
  const handleFilterByProviders = (id) => {
    setProviderId(id);
  };
  console.log(providerId);
  return (
    <div className="">
      <h2 className="py-2">Providers {mediaType}:</h2>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <ul className="w-full flex gap-4 overflow-hidden snap-mandatory snap-x px-3 outline-none">
          {data?.results?.map((e) => (
            <li
              key={e.provider_id}
              onClick={() => handleFilterByProviders(e.provider_id)}
              className="w-[4rem] flex-shrink-0"
            >
              <img
                src={`https://image.tmdb.org/t/p/w45/${e.logo_path}`}
                alt={e.provider_name} 
                className="snap-center rounded-full"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Providers;
