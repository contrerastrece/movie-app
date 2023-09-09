import React from 'react'
import useFetch from '../hook/useFetch'

const UpcomingMovies = () => {
const apiUrl='movie/upcoming';
  const {data,loading}=useFetch(apiUrl);
  console.log(data)
  return (
    <>
    {loading?(<h2>Loading</h2>):(<>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4  p-4">
      {data.results.map((e) => (
          <div key={e.id} className="cursor-pointer relative ">
          <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt={`e.title`} className='h-full rounded-lg' />
            
          </div>
        ))}
      </div>
    </>    
       
      )
    }
    </>
  )
}

export default UpcomingMovies