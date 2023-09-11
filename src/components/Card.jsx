import React from "react";
import { Link } from "react-router-dom";
import NoImage from "../assets/images/NoImage.jpg";

const Card = ({ data, loading }) => {
  // console.log("🫰",data);
  return (
    <div className="grid grid-cols-3 border gap-3">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {data.map((e) => (
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
  );
};

export default Card;
