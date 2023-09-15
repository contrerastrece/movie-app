import React, { useState } from "react";
import useFetch from "../hook/useFetch";

const Categories = ({type}) => {
  const [category, setCategory] = useState("");

  const apiUrl = `genre/${type}/list`;
  const { data, loading } = useFetch(apiUrl);
  const handleFilterCategory = (categoryId) => {
    setCategory(categoryId);
    console.log(category);
  };
  return (
    <div className="w-full">
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <ul className="w-full flex gap-2 overflow-hidden snap-mandatory snap-x px-3 outline-none">
          {data.genres.map((e) => (
            <li
              key={e.id}
              className={`text-center rounded-lg h-6 p-0 px-3 text-[0.9rem] snap-center bg-slate-100 text-blue-950 cursor-pointer ${
                e.id === category ? "bg-blue-950 text-white" : ""
              }`}
              onClick={() => handleFilterCategory(e.id)}
            >
              {e.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
