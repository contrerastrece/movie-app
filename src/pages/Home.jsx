import React from 'react'
import PopularMovies from '../components/PopularMovies'
import UpcomingMovies from '../components/UpcomingMovies'
import WatchNow from '../components/WatchNow'

const Home = () => {
  return (
   <div className='pb-[5rem]'>
    <PopularMovies/>
    <UpcomingMovies/>
    <WatchNow/>
   </div>
  )
}

export default Home