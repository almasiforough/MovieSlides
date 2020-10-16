import React from 'react'
import useStyles from './styles/MovieDetails.styles'

export default function MovieBasicDetails({ selectedmovie }) {
  const classes = useStyles()

  return (
    <>
      {selectedmovie.Year === 'N/A' ? "" :
        <div className={classes.movieDetailsItem}>
          <span>Year: </span>
          {selectedmovie.Year}
        </div>}
      {selectedmovie.Rated === 'N/A' ? "" :
        <div className={classes.movieDetailsItem}>
          <span>Rated: </span>
          {selectedmovie.Rated}
        </div>}
      {selectedmovie.Released === 'N/A' ? "" :
        <div className={classes.movieDetailsItem}>
          <span>Released: </span>
          {selectedmovie.Released}
        </div>}
      {selectedmovie.Runtime === 'N/A' ? "" :
        <div className={classes.movieDetailsItem}>
          <span>Duration: </span>
          {selectedmovie.Runtime}
        </div>}
      {selectedmovie.Language === 'N/A' ? "" :
        <div className={classes.movieDetailsItem}>
          <span>Language: </span>
          {selectedmovie.Language}
        </div>}
      {selectedmovie.Country === 'N/A' ? "" :
        <div className={classes.movieDetailsItem}>
          <span>Country: </span>
          {selectedmovie.Country}
        </div>}
      {selectedmovie.Genre === 'N/A' ? "" :
        <div className={classes.movieDetailsItemFullWith}>
          <span>Genre: </span>
          {selectedmovie.Genre}
        </div>}
      {selectedmovie.Plot === 'N/A' ? "" :
        <div
          className={[classes.movieDetailsItemFullWith, classes.plot].join(' ')}
        >
          <span>Plot: </span>
          {selectedmovie.Plot}
        </div>}
    </>
  )
}
