import React from 'react'
import useFetch from '../hook/useFetch';

const EpisodeTv = ({id,season,episode}) => {
  const apiUrl=`tv/${id}/season/${season}/episode/${episode}`;
  const {data,loading} =useFetch(apiUrl);
  console.log(data);
  return (
    <div>EpisodeTv {episode}</div>
  )
}

export default EpisodeTv