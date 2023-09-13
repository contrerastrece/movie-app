import React, { useState } from "react";
import Card from "./Card";
import useFetch from "../hook/useFetch";

const Credits = ({ id }) => {
  


  const urlCredits = `movie/${id}/credits`;
  const { data, loading } = useFetch(urlCredits);
  // console.log(data?.cast);
  // console.log("🚩", data.cast);

  return (
    <div>
      {loading ? <h1>Loading</h1> : <Card data={data.cast} loading={loading} />}
      
    </div>
  );
};

export default Credits;
