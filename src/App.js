import React, { useState } from 'react'
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { movies } from './Data';
import { Rating } from 'react-simple-star-rating'
import AddMovie from './components/AddMovie';


const App = () => {
  const [film, setFilm] = useState(movies)
  function handleFilm(newfilm) {
    setFilm([...film,newfilm])
  }
 
  return (
    <div>
      <AddMovie handleFilmp={handleFilm}/>
      <MovieList movies={film}/>
    </div>
  )
}

export default App
