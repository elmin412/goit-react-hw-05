import './App.css'
import HomePage from '../../pages/HomePage/HomePage'
import MoviesPage from '../../pages/MoviesPage/MoviesPage'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import Layout from '../Layout/Layout'
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage'
import MovieCast from "../MovieCast/MovieCast"
import MovieReviews from "../MovieReviews/MovieReviews"
import SearchMoviesPage from '../../pages/SearchMoviesPage/SearchMoviesPage'

function App() {

  return (
    <>
      <Layout>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/search/movie' element={<SearchMoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Layout>

    </>
  )
}

export default App
