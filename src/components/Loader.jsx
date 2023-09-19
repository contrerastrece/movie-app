import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = () => {
  const arr = [1, 2, 3,4];
    return (
      <SkeletonTheme
        baseColor="#6E707A"
        highlightColor="rgba(232, 232, 232, 0.25)"
      >
        <div className="flex gap-3">
          {arr.map((e) => (
            <Skeleton width={100} height={150} duration={0.5} key={e} />
          ))}
        </div>
      </SkeletonTheme>
    );
}

export default Loader