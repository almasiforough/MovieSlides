import React from 'react'
import useStyles from '../components/styles/MovieDetails.styles'
import { Typography, Hidden } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
export default function MoiveDetailsSkeleton() {
  const classes = useStyles()

  return (
    <div className={classes.movieDetailsContainer}>
      <Hidden mdUp implementation="css">
        <div className={classes.movieTitle}>
          <Skeleton
            animation="wave"
            width="50%"
            height={60}
            style={{ margin: 'auto', borderRadius: 10 }}
          />
        </div>
      </Hidden>
      <div className={classes.root}>
        <div className={classes.moviePoster}>
          <Skeleton animation="wave" className={classes.movieImgSkeleton} />
        </div>
        <div className={classes.movieDetails}>
          <Hidden smDown implementation="css">
            <div className={classes.movieTitle}>
              <Skeleton
                animation="wave"
                width="50%"
                height={60}
                style={{ margin: 'auto', borderRadius: 10 }}
              />
            </div>
          </Hidden>
          <div className={classes.movieMetaData}>
            <div className={classes.movieMainDetails}>
              <div className={classes.movieDetailsItem}>
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className={classes.movieDetailsItem}>
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className={classes.movieDetailsItem}>
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className={classes.movieDetailsItem}>
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className={classes.movieDetailsItem}>
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className={classes.movieDetailsItem}>
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className={classes.movieDetailsItemFullWith}>
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div
                className={[
                  classes.movieDetailsItemFullWith,
                  classes.plot
                ].join(' ')}
              >
                <Skeleton
                  animation="wave"
                  width="100%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <Typography
                variant="h6"
                className={classes.movieDetailsSectionTitle}
              >
                Cast and Crew:
              </Typography>
              <div
                className={[
                  classes.movieDetailsItemFullWith,
                  classes.plot
                ].join(' ')}
              >
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div
                className={[
                  classes.movieDetailsItemFullWith,
                  classes.plot
                ].join(' ')}
              >
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div
                className={[
                  classes.movieDetailsItemFullWith,
                  classes.plot
                ].join(' ')}
              >
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>

              <Typography
                variant="h6"
                className={classes.movieDetailsSectionTitle}
              >
                Popularity:
              </Typography>
              <div
                className={[classes.movieDetailsItem, classes.plot].join(' ')}
              >
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div
                className={[classes.movieDetailsItem, classes.plot].join(' ')}
              >
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div
                className={[classes.movieDetailsItem, classes.plot].join(' ')}
              >
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div
                className={[
                  classes.movieDetailsItemFullWith,
                  classes.plot
                ].join(' ')}
              >
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>

              <Typography
                variant="h6"
                className={classes.movieDetailsSectionTitle}
              >
                Production Details:
              </Typography>
              <div
                className={[classes.movieDetailsItem, classes.plot].join(' ')}
              >
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div
                className={[classes.movieDetailsItem, classes.plot].join(' ')}
              >
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div
                className={[classes.movieDetailsItem, classes.plot].join(' ')}
              >
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div
                className={[
                  classes.movieDetailsItemFullWith,
                  classes.plot
                ].join(' ')}
              >
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div
                className={[
                  classes.movieDetailsItemFullWith,
                  classes.plot
                ].join(' ')}
              >
                <Skeleton
                  animation="wave"
                  width="70%"
                  height={20}
                  style={{ borderRadius: 10 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
