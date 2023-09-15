import React from 'react'
import Categories from '../components/Categories'
import Popular from '../components/Popular'
import TopRated from '../components/TopRated'

const Series = () => {
  return (
    <div className='p-4 pb-14'>
      <Categories type={"tv"} />
      <TopRated mediaType={"tv"}/>
      <Popular mediaType={"tv"}/>
    </div>
  )
}

export default Series