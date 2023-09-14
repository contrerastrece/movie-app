import React from "react";
import useFetch from "../hook/useFetch";
import Card from "./Card";

const PopularSeries = () => {
  const apiUrl = "tv/popular";
  const { data, loading } = useFetch(apiUrl);
  console.log(data);

  return (
    <>
      <h2>UpComming ⚡</h2>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <Card data={data.results} loading={loading} />
      )}
    </>
  );
};

export default PopularSeries;
