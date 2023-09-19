import React, { useState } from "react";
import SearchAll from "../components/SearchAll";

const Search = () => {
  const [search, setSearch] = useState("");

  console.log(search);
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center py-[2rem] gap-8 min-h-[100dvh] pb-14">
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="¿qué estas buscando?"
          className="h-[2rem] rounded-[1rem] p-[1rem] text-black"
        />
      </form>

      <SearchAll text={search} />
    </div>
  );
};

export default Search;
