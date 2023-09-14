import React from 'react'
import PopularSeries from '../components/PopularSeries'
import Categories from '../components/Categories'
import TopSeries from '../components/TopSeries'

const Series = () => {
  return (
    <div>
      <Categories type={"tv"} />
      <TopSeries/>
      <PopularSeries />
      
    </div>
  )
}

export default Series