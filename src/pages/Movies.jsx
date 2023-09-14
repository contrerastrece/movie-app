import React from 'react'
import UpcomingMovies from '../components/UpcomingMovies'
import Categories from '../components/Categories'
import TopMovies from '../components/TopMovies'

const Movies = () => {
  return (
    <>
    <Categories type={"movie"}/>
    <TopMovies/>
    <UpcomingMovies/>
    </>
  )
}

export default Movies