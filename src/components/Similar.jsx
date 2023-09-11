import React from "react";
import Card from "./Card";
import useFetch from "../hook/useFetch";

const Similar = ({ id }) => {
  const urlSimilar = `movie/${id}/similar`;
  const { data, loading } = useFetch(urlSimilar);

  return (
    <>
      <h2>SImilar</h2>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Card
          data={data.results.filter((e) => e.poster_path).slice(0, 6)}
          loading={loading}
        />
      )}
    </>
  );
};

export default Similar;
