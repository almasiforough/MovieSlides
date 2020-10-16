import React from 'react'
import useStyles from './styles/MovieDetails.styles'
import { Typography, Hidden } from '@material-ui/core'
import MovieDetailsSkeleton from '../skeleton/MovieDetailsSkeleton'
import MovieBasicDetails from './MovieBasicDetails'
import MoreDetails from './MoreDetails'

export default function MovieDetails({ selectedmovie, isLoading }) {
  const classes = useStyles()
  if (isLoading) {
    return <MovieDetailsSkeleton />
  }
  return (
    <div className={classes.movieDetailsContainer}>
      <Hidden mdUp implementation="css">
        <div id="title" className={classes.movieTitle}>
          <Typography variant="h3">{selectedmovie.Title}</Typography>
        </div>

        <div className={classes.movieMetaData}>
          <div className={classes.movieMainDetails}>
            <MovieBasicDetails selectedmovie={selectedmovie} />
          </div>
        </div>
      </Hidden>
      <div className={classes.root}>
        <div className={classes.moviePoster}>
          <img
            src={selectedmovie.Poster}
            className={classes.movieImg}
            alt={selectedmovie.Title}
          />
        </div>
        <div className={classes.movieDetails}>
          <Hidden smDown implementation="css">
            <div className={classes.movieTitle}>
              <Typography variant="h3">{selectedmovie.Title}</Typography>
            </div>
          </Hidden>
          <div
            className={[
              classes.movieMetaData,
              classes.movieMetaDataMobileSize
            ].join(' ')}
          >
            <div className={classes.movieMainDetails}>
              <Hidden smDown>
                <MovieBasicDetails selectedmovie={selectedmovie} />
                <Typography
                  variant="h6"
                  className={classes.movieDetailsSectionTitle}
                >
                  Cast and Crew:
              </Typography>
              </Hidden>
              {selectedmovie.Director === 'N/A' ? "" :
                <div
                  className={[
                    classes.movieDetailsItemFullWith,
                    classes.plot
                  ].join(' ')}
                >
                  <span>Director: </span>
                  {selectedmovie.Director}
                </div>}
              {selectedmovie.Writer === 'N/A' ? "" :
                <div
                  className={[
                    classes.movieDetailsItemFullWith,
                    classes.plot
                  ].join(' ')}
                >
                  <span>Writer: </span>
                  {selectedmovie.Writer}
                </div>}
              {selectedmovie.Actors === 'N/A' ? "" :
                <div
                  className={[
                    classes.movieDetailsItemFullWith,
                    classes.plot
                  ].join(' ')}
                >
                  <span>Actors: </span>
                  {selectedmovie.Actors}
                </div>}
              <Hidden smDown>
                <MoreDetails selectedmovie={selectedmovie} />
              </Hidden>
            </div>
          </div>
        </div>
      </div>
      <Hidden mdUp>
        <div className={classes.movieMetaData}>
          <div className={classes.movieMainDetails}>
            <MoreDetails selectedmovie={selectedmovie} />
          </div>
        </div>
      </Hidden>
    </div>
  )
}
