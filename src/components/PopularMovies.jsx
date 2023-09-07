import React, { useEffect, useState } from "react";
import Carousel from "nuka-carousel";
import "../assets/css/carousel.css";
const PopularMovies = () => {
  const [trendMovie, setTrendMovie] = useState([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGI2NzViNTBjZDRhMmM5NjRhYmNjNzA1OTU3ZTgzMCIsInN1YiI6IjY0ZWUwZDdiNGNiZTEyMDBmZTBkODE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.acB_V0mV7MkKdHm4zxT8XHxg9W39Uz5qmacUwyoY63c",
    },
  };

  const getTrendMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      const result = await response.json();
      setTrendMovie(result.results.slice(0, 5));
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTrendMovies();
  }, []);

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
    autoplayInterval: 2000,
    wrapAround: true,
    adaptiveHeight: false,
    renderCenterRightControls: null,
    renderCenterLeftControls: null,
  };

  console.log(trendMovie);

  return (
    <div className="w-full m-0 p-0 ">
      <Carousel {...optionsCarousel}>
        {trendMovie.map((e) => (
          <div key={e.id} className="cursor-pointer relative h-[33rem] ">
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
              />
            </picture>
            <div className="absolute z-10 content-text bottom-10  w-[90%] md:w-[60%] h-auto flex  flex-col items-center justify-center left-1/2 transform -translate-x-1/2">

              <h3 className="text-white text-4xl md:text-5xl font-bold my-5">
                {e.title}
              </h3>
              <p className="text-[0.9rem] line-clamp-2 font-extralight">{e.overview}</p>
            </div>
            <div className="absolute w-full top-0 left-0 h-full shadow-carousel"></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMovies;
