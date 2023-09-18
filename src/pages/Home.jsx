import React from 'react'
import TrendCarousel from '../components/TrendCarousel'
import Popular from '../components/Popular'
import WatchNow from '../components/WatchNow'

const Home = () => {
  return (
   <div className='pb-[5rem]'>
    <TrendCarousel mediaType={"movie"} />
    <Popular mediaType={"movie"}/>
    <Popular mediaType={"tv"}/>
    <WatchNow mediaType={"movie"}/>
   </div>
  )
}

export default Home