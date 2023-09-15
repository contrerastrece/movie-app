import React from "react";
import useFetch from "../hook/useFetch";
import Card from "./Card";

const UpcomingMovies = ({mediaType}) => {
  const apiUrl = `${mediaType}/upcoming`;
  const { data, loading } = useFetch(apiUrl);

  return (
    <>
      <h2>UpComming ⚡</h2>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <Card data={data?.results} loading={loading} mediaType={mediaType}/>
      )}
    </>
  );
};

export default UpcomingMovies;
