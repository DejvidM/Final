import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
import DisplayMovies from './components/DisplayMovies'
import AddMovie from './components/AddMovie'
import WriteReview from './components/WriteReview'
import ReadReviews from './components/ReadReviews'


function App() {

  return (
    <>
    <h1>Moldy Tomatoes</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/movies'} />}></Route>
          <Route path='/movies' element={< DisplayMovies />}></Route>
          <Route path='/movies/new' element={<AddMovie />}></Route>
          <Route path='/movies/:_id/review' element={<WriteReview />}></Route>
          <Route path='/movies/:_id' element={<ReadReviews />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
