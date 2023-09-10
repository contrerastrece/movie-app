import React from 'react'
import useFetch from '../hook/useFetch';
import { Link } from 'react-router-dom';

const Card = ({id}) => {
  const urlSimilar = `movie/${id}/similar`;
  const { data, loading} = useFetch(urlSimilar);
  console.log(data)

  return (<>
  
      <h2>Similares como esto...</h2>
    <div className='grid grid-cols-3 border gap-3' >
     {loading ?<>Loading...</>:<>{(data.results.filter(e=>e.poster_path)).map(e=> 
      <Link to={`../pages/Detail/${e.id}`} className='cursor-pointer relative' key={e.id}>
      <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt={e.title} className='rounded-lg'/>
      </Link>
      )}</>}
  
    </div>
      </>
  )
}

export default Card