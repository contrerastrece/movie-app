import React from "react";
import Card from "./Card";
import useFetch from "../hook/useFetch";

const Credits = ({ id,mediaType }) => {
  const urlCredits = `${mediaType}/${id}/credits`;
  const { data, loading } = useFetch(urlCredits);

  return (
    <div>
      <h2>Credits</h2>
      {loading ? <h1>Loading</h1> : <Card data={data?.cast} loading={loading} />}
    </div>
  );
};

export default Credits;
