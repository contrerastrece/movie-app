import React from "react";
import Card from "./Card";
import useFetch from "../hook/useFetch";
import Loader from "./Loader";

const Credits = ({ id,mediaType }) => {
  const urlCredits = `${mediaType}/${id}/credits`;
  const { data, loading } = useFetch(urlCredits);
  // console.log(data,"🚩");

  return (
    <div>
      <h2>Credits</h2>
      {loading ? <Loader/> : <Card data={data?.cast} loading={loading} />}
    </div>
  );
};

export default Credits;
