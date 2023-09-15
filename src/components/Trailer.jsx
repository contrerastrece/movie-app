import React, { useState } from "react";
import useFetch from "../hook/useFetch";
import YouTube from "react-youtube";
import "../assets/css/trailer.css";

const Trailer = ({ id, mediaType}) => {
  const urlvideo = `${mediaType}/${id}/videos`;
  const { data, loading } = useFetch(urlvideo);
  // const [trailer, setTrailer] = useState(null);

 const trailer=data?.results?.find(vid=>vid.name==="Official Trailer");
 console.log(trailer,"🫰");
  console.log(data);
  const opts = {
    playerVars: {
      autoplay: 0, // Reproducir automáticamente el video
      modestbranding: 0, // Logotipo de YouTube minimalista
      controls: 0, // Ocultar los controles de reproducción
      showinfo: 0, // Ocultar información del video
      rel: 0, // Evitar recomendaciones al finalizar
      disablekb: 1,
      cc_lang_pref: 'es-ES',
      cc_load_policy: 1,
      fs:0,
      iv_load_policy:0
    },
  };

  return (
    <>
    <h2>{trailer?trailer?.name:data?.results[0]?.name}</h2>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
        {data?.results?.length ? (
          <YouTube
          videoId={trailer?(trailer?.key):(data?.results?.find((result) => result?.official === true)?.key||data?.results[0]?.key)}
          className="youtube-container"
          opts={opts}
          />
          
          ):<>No se Encontró el Trailer</>}
         </>
        )}
    </>
  );
};

export default Trailer;
