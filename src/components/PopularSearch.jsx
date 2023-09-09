import React from "react";
import useFetch from "../hook/useFetch";

const PopularSearch = () => {
  const apiUrl = "genre/movie/list";
  const { data, loading } = useFetch(apiUrl);
  console.log(data);

  return (
    <>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <ul className="w-full flex gap-2 overflow-hidden snap-mandatory snap-x px-3">
          {data.genres.map((e) => (
            <li key={e.id} className="border text-center rounded-lg h-6 p-0 px-3 text-[0.9rem] snap-center bg-slate-100 text-blue-950">{e.name}</li>
          ))}
        </ul>
      )}
      <div>PopularSearch</div>
    </>
  );
};
export default PopularSearch;
