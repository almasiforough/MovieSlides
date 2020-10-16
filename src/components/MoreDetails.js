import { Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles/MovieDetails.styles'

export default function MoreDetails({ selectedmovie }) {
    const classes = useStyles()
    return (
        <>
            {selectedmovie.Metascore === 'N/A' && selectedmovie.Rating === 'N/A' && selectedmovie.Votes && selectedmovie.Awards ? "" :
                <Typography
                    variant="h6"
                    className={classes.movieDetailsSectionTitle}
                >
                    Popularity:
              </Typography>}
            {selectedmovie.Metascore === 'N/A' ? "" :
                <div
                    className={[classes.movieDetailsItem, classes.plot].join(' ')}
                >
                    <span>Score: </span>
                    {selectedmovie.Metascore}
                </div>}
            {selectedmovie.Rating === 'N/A' ? "" :
                <div
                    className={[classes.movieDetailsItem, classes.plot].join(' ')}
                >
                    <span>Rating: </span>
                    {selectedmovie.Rating}
                </div>}
            {selectedmovie.Votes === 'N/A' ? "" :
                <div
                    className={[classes.movieDetailsItem, classes.plot].join(' ')}
                >
                    <span>Votes: </span>
                    {selectedmovie.Votes}
                </div>}
            {selectedmovie.Awards === 'N/A' ? "" :
                <div
                    className={[
                        classes.movieDetailsItemFullWith,
                        classes.plot
                    ].join(' ')}
                >
                    <span>Awards: </span>
                    {selectedmovie.Awards}
                </div>}
            {selectedmovie.Type === 'N/A' && selectedmovie.DVD === 'N/A' && selectedmovie.BoxOffice === 'N/A' && selectedmovie.Production === 'N/A' && selectedmovie.Website === 'N/A' ? "" :
                <Typography
                    variant="h6"
                    className={classes.movieDetailsSectionTitle}
                >
                    Production Details:
              </Typography>}
            {selectedmovie.Type === 'N/A' ? "" :
                <div
                    className={[classes.movieDetailsItem, classes.plot].join(' ')}
                >
                    <span>Type: </span>
                    {selectedmovie.Type}
                </div>}
            {selectedmovie.DVD === 'N/A' ? "" :
                <div
                    className={[classes.movieDetailsItem, classes.plot].join(' ')}
                >
                    <span>DVD: </span>
                    {selectedmovie.DVD}
                </div>}
            {selectedmovie.BoxOffice === 'N/A' ? "" :
                <div
                    className={[classes.movieDetailsItem, classes.plot].join(' ')}
                >
                    <span>BoxOffice: </span>
                    {selectedmovie.BoxOffice}
                </div>}
            {selectedmovie.Production === 'N/A' ? "" :
                <div
                    className={[
                        classes.movieDetailsItemFullWith,
                        classes.plot
                    ].join(' ')}
                >
                    <span>Production: </span>
                    {selectedmovie.Production}
                </div>}
            {selectedmovie.Website === 'N/A' ? "" :
                <div
                    className={[
                        classes.movieDetailsItemFullWith,
                        classes.plot
                    ].join(' ')}
                >
                    <span>Website: </span>
                    {selectedmovie.Website}
                </div>}
        </>
    )
}