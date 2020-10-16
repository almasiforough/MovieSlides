import React from 'react'
import useStyles from './styles/MoviesSlide.style'
import Slider from 'react-slick'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import SlidesSkeleton from '../skeleton/SlidesSkeleton'

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#545454',
        borderRadius: '50%',
        paddingTop: 2
      }}
      onClick={onClick}
    />
  )
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#545454',
        borderRadius: '50%',
        paddingTop: 2
      }}
      onClick={onClick}
    />
  )
}

const genreList = [
  'Adventure',
  'Drama',
  'Family',
  'Thriller',
  'Action',
  'Sci-Fi',
  'Crime',
  'Comedy',
  'Animation',
  'Fantasy',
  'Musical',
  'Horror',
  'Mystery',
  'Short',
  'Documentary',
  'History'
]
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
}

export default function MoivesSlide(props) {
  const classes = useStyles()

  const handleSelect = (newValue) => {
    props.genreFilter(newValue)
  }

  return (
    <div className={classes.sildesContainer}>
      <Autocomplete
        options={genreList}
        className={classes.autoComplete}
        onChange={(event, newValue) => handleSelect(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Genre" variant="outlined" fullWidth />
        )}
      />
      {props.isLoading ? (
        <SlidesSkeleton />
      ) : (
          <Slider {...settings}>
            {props.movielist.map((item) => {
              return (
                <div key={item.Id} className={classes.sliderImgContainer}>
                  <img
                    src={item.Poster}
                    alt="alttext"
                    onClick={() => props.setSelectedMovie(item)}
                    className={classes.sliderImg}
                  />
                </div>
              )
            })}
          </Slider>
        )}
    </div>
  )
}
