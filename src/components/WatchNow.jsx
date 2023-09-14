import React from 'react'
import useFetch from '../hook/useFetch'
import Card from './Card';

const WatchNow = () => {
  const urlWatch = `movie/now_playing`;
  const {data,loading}=useFetch(urlWatch);
  return (
    <div>
      <h2>Playing Now! 🟢</h2>
      {
        loading ? (<h2>Loading...</h2>):<Card data={data.results} loading={loading}/>
      }
    </div>
  )
}

export default WatchNow