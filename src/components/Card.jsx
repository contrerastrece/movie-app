import React, { useState } from "react";
import { Link } from "react-router-dom";
import NoImage from "../assets/images/NoImage.jpg";

const Card = ({ data, loading }) => {
  const [visibleItems, setVisibleItems] = useState(5);

  const loadMoreItems = () => {
    setVisibleItems(visibleItems + 5);
  };

  // console.log("🫰",data);
  return (
    <>
      <div className="grid grid-cols-3 border gap-3">
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {data.slice(0, visibleItems).map((e) => (
              <Link
                to={`../pages/Detail/${e.id}`}
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
              </Link>
            ))}
          </>
        )}
      </div>
      {visibleItems < data.length && (
        // Muestra el botón "Mostrar Más" solo si hay más elementos para cargar
        <button onClick={loadMoreItems}>Mostrar Más</button>
      )}
    </>
  );
};

export default Card;
