import React from "react";
import Card from "./Card";
import useFetch from "../hook/useFetch";
import Loader from "./Loader";

const Similar = ({ id, mediaType }) => {
  const urlSimilar = `${mediaType}/${id}/similar`;
  const { data, loading } = useFetch(urlSimilar);
// console.log(data,"🥹");
  return (
    <>
      <h2>Similar a esto... 😁</h2>
      {loading ? (
        <Loader />
      ) : (
        <Card
          data={data?.results?.filter((e) => e.poster_path)}
          loading={loading}
          mediaType={mediaType}
        />
      )}
    </>
  );
};

export default Similar;
