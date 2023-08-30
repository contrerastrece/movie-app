import React,{useEffect, useState} from 'react'

const PopularMovies = () => {
  const [trendMovie, setTrendMovie ] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGI2NzViNTBjZDRhMmM5NjRhYmNjNzA1OTU3ZTgzMCIsInN1YiI6IjY0ZWUwZDdiNGNiZTEyMDBmZTBkODE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.acB_V0mV7MkKdHm4zxT8XHxg9W39Uz5qmacUwyoY63c'
    }
  };
  
  const getTrendMovies=async()=>{
    try {
      const response=await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US',options);
      const result=await response.json();
      setTrendMovie(result.results);
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getTrendMovies()
  }, []);

console.log(trendMovie)
  return (
    <div className='w-full m-0 p-0 '>
      <h2 className='text-[1.25rem] py-3'>Popular Movies</h2>
      <div className=" w-full flex flex-wrap border gap-5">
        
     
      {trendMovie.map(e=>(
        <div key={e.id} className='w-[130px] lg:w-[160px] cursor-pointer rounded-lg  overflow-hidden'>

        <img src={`https://image.tmdb.org/t/p/w300/${e.poster_path}`} alt="" className='w-[180px] rounded-lg' />
        <p className='text-[0.8rem]' key={e.id}>{e.title}</p>
        </div>
      )
      
      )}
      </div>
    </div>
  )
}

export default PopularMovies