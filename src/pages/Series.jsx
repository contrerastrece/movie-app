import React from 'react'
import Categories from '../components/Categories'
import Popular from '../components/Popular'
import TopRated from '../components/TopRated'
import Providers from '../components/Providers'

const Series = () => {
  return (
    <div className='p-4 pb-16'>
      <Categories mediaType={"tv"} />
      <TopRated mediaType={"tv"}/>
      <Popular mediaType={"tv"}/>
      <Providers mediaType={"tv"} />
    </div>
  )
}

export default Series