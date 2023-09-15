import React from "react";
import useFetch from "../hook/useFetch";
import Card from "./Card";

const Recomendations = ({ id, mediaType }) => {
  const urlRecomendations = `${mediaType}/${id}/recommendations`;
  const { data, loading } = useFetch(urlRecomendations);
  console.log(data, "🥹");

  return (
    <>
      <h2>Recomendations 🫰</h2>
      {loading ? (
        <h1>Loading</h1>
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

export default Recomendations;
