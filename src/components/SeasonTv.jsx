import React from "react";
import useFetch from "../hook/useFetch";
import YouTube from "react-youtube";
import "../assets/css/trailer.css";

const SeasonTv = ({ season, id }) => {
  const apiUrl = `tv/${id}/season/${season}/videos`;
  const { data, loading } = useFetch(apiUrl);
  console.log(data, "⚡");
  const trailer = data?.results?.find((vid) => vid.type === "Trailer");
  console.log(trailer, "🟢");
  console.log(loading, "🎶");
  const opts = {
    playerVars: {
      autoplay: 0, // Reproducir automáticamente el video
      modestbranding: 0, // Logotipo de YouTube minimalista
      controls: 0, // Ocultar los controles de reproducción
      showinfo: 0, // Ocultar información del video
      rel: 0, // Evitar recomendaciones al finalizar
      disablekb: 1,
      cc_lang_pref: "es-ES",
      cc_load_policy: 1,
      fs: 0,
      iv_load_policy: 0,
    },
  };
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {data.results.length ? (
            <YouTube
              videoId={trailer ? trailer?.key : data?.results[0]?.key}
              className="youtube-container"
              opts={opts}
            />
          ) : (
            <>No se encontró trailer de la temporada</>
          )}
        </>
      )}
    </div>
  );
};

export default SeasonTv;
