import React from "react";
import useFetch from "../hook/useFetch";
import YouTube from "react-youtube";
import "../assets/css/trailer.css";

const Trailer = ({ id, mediaType}) => {
  const urlvideo = `${mediaType}/${id}/videos`;
  const { data, loading } = useFetch(urlvideo);
  const opts = {
    playerVars: {
      autoplay: 0, // Reproducir automáticamente el video
      modestbranding: 0, // Logotipo de YouTube minimalista
      controls: 0, // Ocultar los controles de reproducción
      showinfo: 0, // Ocultar información del video
      rel: 0, // Evitar recomendaciones al finalizar
      disablekb: 1,
      cc_lang_pref: 'es-ES',
      cc_load_policy: 1
    },
  };

  return (
    <>
    <h2>Videos...</h2>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {data?.results?.map((v) => (
            <YouTube
              key={v?.key}
              videoId={v?.key}
              opts={opts}
              className="youtube-container"
            />
          ))}
        </>
      )}
    </>
  );
};

export default Trailer;
