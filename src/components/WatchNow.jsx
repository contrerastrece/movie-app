import React from 'react'
import useFetch from '../hook/useFetch'
import Card from './Card';
import Loader from './Loader';

const WatchNow = ({mediaType}) => {
  const urlWatch = `${mediaType}/now_playing`;
  const {data,loading}=useFetch(urlWatch);
  return (
    <div>
      <h2>Playing Now! 🟢</h2>
      {
        loading ? (<Loader/>):<Card data={data.results} loading={loading} mediaType={mediaType}/>
      }
    </div>
  )
}

export default WatchNow