import React, { useEffect, useState } from 'react'
import MovieDetails from '../components/MovieDetails'
import MoviesSlide from '../components/MoviesSlide'
import { request } from '../helpers/request'
import CustomSnackbar from '../components/CustomSnackbar'

export default function Movies() {
  const [movieList, setMovieList] = useState([])
  const [filteredMovieList, setFilteredMovieList] = useState([...movieList])
  const [selectedMovie, setSelectedMovie] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [showError, setShowError] = useState(false)

  let genreFilter = (genre) => {
    let filterarray
    !genre
      ? (filterarray = movieList)
      : (filterarray = movieList.filter((item) => item.Genre.includes(genre)))
    // let filterarray= movieList.filter(item => item.Genre.includes(genre) )
    setFilteredMovieList([...filterarray])
    setSelectedMovie(filterarray[0])
  }

  const getMoviesList = () => {
    request(' http://www.mocky.io/v2/5af935ab320000221d86afe6')
      .then((data) => {
        setMovieList([...data[1]])
        setFilteredMovieList([...data[1]])
        setSelectedMovie(data[1][0])
        setIsLoading(false)
      })
      .catch(() => {
        setShowError(true)
      })
  }

  useEffect(() => {
    getMoviesList()
  }, [])

  return (
    <>
      {showError && (
        <CustomSnackbar
          open={showError}
          handleClose={() => {
            setIsLoading(true)
            setShowError(false)
          }}
          retry={() => {
            setIsLoading(true)
            setShowError(false)
            getMoviesList()
          }}
          message="Error getting data"
        />
      )}
      <MovieDetails
        selectedmovie={selectedMovie}
        isLoading={isLoading || showError}
      />
      <MoviesSlide
        isLoading={isLoading || showError}
        movielist={filteredMovieList}
        setSelectedMovie={setSelectedMovie}
        genreFilter={genreFilter}
      />
    </>
  )
}
