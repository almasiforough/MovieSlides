import React from 'react'
import useStyles from '../components/styles/MoviesSlide.style'
import Slider from 'react-slick'
import { Skeleton } from '@material-ui/lab'

export default function MoivesSlide() {
  const classes = useStyles()
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Slider {...settings}>
      <Skeleton animation="wave" className={classes.sliderImgSkeleton} />
      <Skeleton animation="wave" className={classes.sliderImgSkeleton} />
      <Skeleton animation="wave" className={classes.sliderImgSkeleton} />
      <Skeleton animation="wave" className={classes.sliderImgSkeleton} />
      <Skeleton animation="wave" className={classes.sliderImgSkeleton} />
    </Slider>
  )
}
