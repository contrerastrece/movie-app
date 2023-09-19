import React from "react";
import useFetch from "../hook/useFetch";
import Card from "./Card";
import Loader from "./Loader";

const TopRated = ({mediaType}) => {
  const apiUrl = `${mediaType}/top_rated`;
  const { data, loading } = useFetch(apiUrl);

  return (
    <>
      <h2>Top {mediaType} 🎇🎬</h2>
      {loading ? (
       <Loader/>
      ) : (
        <Card data={data.results} loading={loading} mediaType={mediaType} />
      )}
    </>
  );
};

export default TopRated;
