import React from 'react'
import UpcomingMovies from '../components/UpcomingMovies'
import TopRated from '../components/TopRated'
import PopularCarousel from '../components/PopularCarousel'

const Home = () => {
  return (
   <div className='pb-[5rem]'>
    <PopularCarousel mediaType={"movie"} />
    <UpcomingMovies mediaType={"movie"}/>
    <TopRated mediaType={"movie"}/>
   </div>
  )
}

export default Home