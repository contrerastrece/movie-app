import React from 'react'
import useFetch from '../hook/useFetch'
import { Link } from 'react-router-dom';

const UpcomingMovies = () => {
const apiUrl='movie/upcoming';
  const {data,loading}=useFetch(apiUrl);

  
  return (
    <>
    {loading?(<h2>Loading</h2>):(<>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4  p-4">
      {data.results.map((e) => (
        <Link to={`../pages/Detail/${e.id}`} className='cursor-pointer relative' key={e.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt={`e.title`} className='h-full rounded-lg' />
        </Link>
        ))}
      </div>
    </>    
       
      )
    }
    </>
  )
}

export default UpcomingMovies