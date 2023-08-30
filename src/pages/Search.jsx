import React from 'react'
import PopularSearch from '../components/PopularSearch';

const Search = () => {
  return (
    <div>
      <form action="">
      <input type="text" placeholder='¿qué estas buscando?'/>
      </form>
      
      <PopularSearch/>
    </div>
  )
}

export default Search