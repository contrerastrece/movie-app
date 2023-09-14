import React from "react";
import useFetch from "../hook/useFetch";
import Card from "./Card";

const TopMovies = () => {
  const apiUrl = "movie/top_rated";
  const { data, loading } = useFetch(apiUrl);

  return (
    <>
      <h2>Top Movies 🎇🎬</h2>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <Card data={data.results} loading={loading} />
      )}
    </>
  );
};

export default TopMovies;
