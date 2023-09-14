import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import Credits from "../components/Credits";
import Similar from "../components/Similar";
import Trailer from "../components/Trailer";
import Recomendations from "../components/Recomendations";

const Detail = () => {
  const { id } = useParams();
  const urlDetails = `movie/${id}`;
  const { data, loading } = useFetch(urlDetails);

  return (
    <div className="pb-16">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt={data.title}
          />
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
          <p>Fecha de lanzamiento: {data.release_date}</p>
          <p>Calificación: {data.vote_average}</p>
        </>
      )}

      <Trailer id={id} />
      <Recomendations id={id} />
      <Similar id={id} />
      <Credits id={id} />

      <Link to="/">Volver</Link>
    </div>
  );
};

export default Detail;
