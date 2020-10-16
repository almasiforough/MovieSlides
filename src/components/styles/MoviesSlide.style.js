import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  sildesContainer: {
    width: '90vw',
    margin: 'auto',
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      width: '80vw'
    }
  },
  selectControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  sliderImg: {
    width: '100%'
  },
  sliderImgContainer: {
    width: '90%!important',
    boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
    minHeight: '270px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '180px'
    }
  },
  sliderImgSkeleton: {
    width: '90%!important',
    height: 500
  },
  autoComplete: {
    width: '40%',
    marginBottom: 16,
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  }
}))
