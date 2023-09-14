import React from "react";
import useFetch from "../hook/useFetch";
import Card from "./Card";

const SearchAll = ({text}) => {
  const apiUrl = `search/multi?query=${text}`;
  const { data, loading } = useFetch(apiUrl);
  console.log("🚩",data)


  return (
    <>
      <h2>Results 🎇🎬</h2>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <Card data={data.results} loading={loading} />
      )}
    </>
  );
};
export default SearchAll;
