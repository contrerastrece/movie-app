import React from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";
import Credits from "../components/Credits";
import Similar from "../components/Similar";
import Trailer from "../components/Trailer";
import Recomendations from "../components/Recomendations";

const Detail = () => {
  const {media_type,id} = useParams();
  console.log(id,media_type);
  const urlDetails = `${media_type}/${id}`;
  console.log(urlDetails);
  const { data, loading } = useFetch(urlDetails);
  const history = useNavigate();
console.log(data);
  return (
    <div className="pb-16">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w780/${data?.poster_path}`}
            alt={data?.title || data?.name}
          />
          <h1>{data?.title || data?.name}</h1>
          <p>{data?.overview}</p>
          <p>Fecha de lanzamiento: {data?.release_date || data?.first_air_date} </p>
          <p>Calificación: {data?.vote_average}</p>
        </>
      )}

      <Trailer id={id} mediaType={media_type}/>
      <Recomendations id={id} mediaType={media_type}/>
      <Similar id={id} mediaType={media_type} />
      <Credits id={id} mediaType={media_type}/>

      <Link to="/">Home</Link>
      <button onClick={() => history(-1)}>Volver</button> 
    </div>
  );
};

export default Detail;
