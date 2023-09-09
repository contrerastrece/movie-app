import React from 'react'
import Categories from '../components/Categories'
import PopularMovies from '../components/PopularMovies'
import UpcomingMovies from '../components/UpcomingMovies'

const Home = () => {
  return (
   <>
    <PopularMovies/>
    <Categories/>
    <UpcomingMovies/>
   </>
  )
}

export default Home