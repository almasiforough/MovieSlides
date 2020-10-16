import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  movieDetailsContainer: {
    width: '90vw',
    margin: 'auto',
    marginTop: '5vw'
  },
  root: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%',
    margin: 'auto'
  },
  moviePoster: {
    marginRight: '20px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '4px',
      flex: 1
    }
  },
  movieImg: {
    height: '100%',
    width: 320,
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  movieImgSkeleton: {
    height: '530px!important',
    width: 330,
    borderRadius: 10,
    transform: 'none!important',
    [theme.breakpoints.down('sm')]: {
      width: 150,
      marginTop: '10px!important'
    }
  },
  movieDetails: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    // marginRight: '90px',
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginLeft: '4px'
    }
  },
  movieTitle: {
    width: '100%',
    boxShadow:
      '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    textAlign: 'center'
  },
  movieMetaData: {
    padding: 16,
    marginTop: 6,
    flex: 1,
    boxShadow:
      '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 8
    }
  },
  movieMetaDataMobileSize: {
    [theme.breakpoints.down('sm')]: {
      borderRadius: 10,
      marginBottom: 0,
      marginTop: 0,
      padding: "12px 8px"
    }
  },
  movieMainDetails: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  movieDetailsItem: {
    width: '33%',
    fontSize: 12,
    marginBottom: 8,
    '& span': {
      color: '#616161',
      fontWeight: '600'
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 18
    },
    [theme.breakpoints.down('sm')]: {
      width: '50%'
    }
  },
  movieDetailsItemFullWith: {
    width: '100%',
    fontSize: 12,
    marginBottom: 4,
    '& span': {
      color: '#616161',
      fontWeight: '600'
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 18
    }
  },
  plot: {
    lineHeight: '18px'
  },
  movieDetailsSectionTitle: {
    marginBottom: 4,
    width: '100%'
  }
}))
