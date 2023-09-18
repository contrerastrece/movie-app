import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const Points = ({data}) => {
  console.log(data)
  return (
     <div >
     <CircularProgressbar
       value={Math.ceil(data?.vote_average)}
       maxValue={10}
       text={`${Math.ceil(data?.vote_average * 10) / 10}`}
       styles={buildStyles({
         textColor: "#1d9bf0",
         pathColor: "#1d9bf0",
         trailColor: "#fff",
         textSize: "2.5rem",
       })}
     />
   </div>

  )
}

export default Points