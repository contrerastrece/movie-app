import React, { useEffect, useState } from "react";
import Carousel from "nuka-carousel";
import "../assets/css/carousel.css";
import useFetch from "../hook/useFetch";

const TrendCarousel = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const apiUrl ="trending/all/week";
  const { data, loading } = useFetch(apiUrl);
  // console.log(data,"🚩")

  useEffect(() => {
    // Función para verificar si es una versión de escritorio
    function checkIsDesktop() {
      setIsDesktop(window.innerWidth >= 768); // Ajusta este valor según tu definición de escritorio
    }

    // Verifica el tamaño de la pantalla al cargar la página
    checkIsDesktop();

    // Agrega un event listener para verificar el tamaño de la pantalla al cambiar
    window.addEventListener("resize", checkIsDesktop);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, []);

  const optionsCarousel = {
    autoplay: true,
    autoplayInterval: 4000,
    wrapAround: true,
    adaptiveHeight: false,
    renderCenterRightControls: null,
    renderCenterLeftControls: null,
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full m-0 p-0 ">
          <Carousel {...optionsCarousel}>
            {data?.results?.slice(0, 10).map((e) => (
              <div key={e.id} className="cursor-pointer relative">
                <picture>
                  {/* <!-- Imagen para dispositivos móviles --> */}
                  <source
                    media="(max-width: 768px)"
                    srcSet={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                  />
                  {/* <!-- Imagen para dispositivos de escritorio --> */}
                  <source
                    media="(min-width: 769px)"
                    srcSet={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`}
                  />
                  {/* <!-- Imagen predeterminada si no coincide ninguna consulta de medios --> */}
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                    alt=""
                    loading="lazy"
                  />
                </picture>
                <div className="absolute z-10 content-text bottom-10  w-[90%] md:w-[60%] h-auto flex  flex-col items-center justify-center left-1/2 transform -translate-x-1/2">
                  <h3 className="text-white text-3xl md:text-4xl font-bold my-3">
                    {e.title || e.name}
                  </h3>
                  <p className="text-[0.9rem] line-clamp-2 font-extralight">
                    {e.overview}
                  </p>
                </div>
                <div className="absolute w-full top-0 left-0 h-full shadow-carousel"></div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default TrendCarousel;
