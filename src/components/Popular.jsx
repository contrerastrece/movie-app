import React from "react";
import useFetch from "../hook/useFetch";
import Card from "./Card";
import Loader from "./Loader";

const Popular = ({mediaType}) => {
  const apiUrl = `${mediaType}/popular`;
  const { data, loading } = useFetch(apiUrl);

  return (
    <>
      <h2>Popular {mediaType}⚡</h2>
      {loading ? (
       <Loader/>     
      ) : (
        <Card data={data?.results} loading={loading} mediaType={mediaType} />
      )}
    </>
  );
};

export default Popular;
