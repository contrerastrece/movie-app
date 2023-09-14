import React from "react";
import useFetch from "../hook/useFetch";
import Card from "./Card";

const TopSeries = () => {
  const apiUrl = "tv/top_rated";
  const { data, loading } = useFetch(apiUrl);
  console.log(data);

  return (
    <>
      <h2>TopRated ⚡</h2>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <Card data={data.results} loading={loading} />
      )}
    </>
  );
};

export default TopSeries;
