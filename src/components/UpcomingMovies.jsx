import React from "react";
import useFetch from "../hook/useFetch";
import Card from "./Card";
import Loader from "./Loader";

const UpcomingMovies = ({mediaType}) => {
  const apiUrl = `${mediaType}/upcoming`;
  const { data, loading } = useFetch(apiUrl);

  return (
    <>
      <h2>UpComming ⚡</h2>
      {loading ? (
        <Loader/>
      ) : (
        <Card data={data?.results} loading={loading} mediaType={mediaType}/>
      )}
    </>
  );
};

export default UpcomingMovies;
