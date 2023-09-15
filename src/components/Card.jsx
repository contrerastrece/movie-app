import React, { useState } from "react";
import { Link } from "react-router-dom";
import NoImage from "../assets/images/NoImage.jpg";

const Card = ({ data, loading, mediaType }) => {
  const [visibleItems, setVisibleItems] = useState(3);

  const loadMoreItems = () => {
    // Incrementa la cantidad de elementos visibles cuando se hace clic en "Mostrar Más"
    const newVisibleItems = visibleItems + 10; // Por ejemplo, agrega 10 elementos más cada vez

    // Verifica si ya se han mostrado todos los elementos
    if (newVisibleItems >= data?.length) {
      setVisibleItems(data?.length);
    } else {
      setVisibleItems(newVisibleItems);
    }
  };

  // console.log("🫰",visibleItems,"/",data.length);
  return (
    <div className="grid items-center p-2">
      <div className="grid grid-cols-3 gap-3">
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {data?.slice(0, visibleItems).map((e) => (
              <Link
                to={`../pages/Detail/${e.media_type || mediaType}/${e.id}`}
                className="cursor-pointer relative flex justify-center items-center"
                key={e.id}
              >
                <img
                  src={
                    e.poster_path || e.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${
                          e.poster_path || e.profile_path
                        }`
                      : NoImage
                  }
                  alt={e.title}
                  className="rounded-lg "
                />
                <p className="absolute bg-white text-black">{e.media_type}</p>
              </Link>
            ))}
          </>
        )}
      </div>

      {visibleItems < data?.length && (
        // Muestra el botón "Mostrar Más" solo si hay más elementos para cargar
        <button
          onClick={loadMoreItems}
          className="w-4/5 p-1 bg-white text-blue-900 rounded-xl mx-auto my-3"
        >
          Mostrar Más...
        </button>
      )}
    </div>
  );
};

export default Card;
