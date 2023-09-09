import React from 'react'
import PopularSearch from '../components/PopularSearch';

const Search = () => {
  
  return (
    <div className='flex flex-col items-center py-[2rem] gap-8'>
      <form action="">
      <input type="text" placeholder='¿qué estas buscando?' className='h-[2rem] rounded-[1rem] p-[1rem]'/>
      </form>
      
      <PopularSearch/>
    </div>
  )
}

export default Search