import { IconContext } from 'react-icons/lib';
import './App.css'
import MenuBar from './components/MenuBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Movies from './pages/Movies';
import Series from './pages/Series';
function App() {
 
  return (
    <div className='app'>
      <BrowserRouter>
        <IconContext.Provider value={{className:"icon-global"}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pages/Search' element={<Search/>}/>
            <Route path='/pages/Movies' element={<Movies/>}/>
            <Route path='/pages/Series' element={<Series/>}/>
          </Routes>
          <MenuBar/>
        </IconContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
