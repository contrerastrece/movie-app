import React from "react";
import useFetch from "../hook/useFetch";
import Card from "./Card";

const Popular = ({mediaType}) => {
  const apiUrl = `${mediaType}/popular`;
  const { data, loading } = useFetch(apiUrl);

  return (
    <>
      <h2>Popular⚡</h2>
      {loading ? (
        <h2>Loading</h2>               
      ) : (
        <Card data={data?.results} loading={loading} mediaType={mediaType} />
      )}
    </>
  );
};

export default Popular;
