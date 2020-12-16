/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import {
  makeStyles, Grid, Typography, Button,
} from '@material-ui/core';
import { generateRandowmNumber } from '../helpers/common';
import { urls, imageBaseUrl } from '../helpers/constants';
import fetch from '../helpers/data';

const Banner = () => {
  const [movie, setMovie] = useState(null);
  useEffect(async () => {
    const fetchMovies = async () => {
      const { data: { results } } = await fetch.get(urls.originals);
      const index = generateRandowmNumber(results.length);

      return results[index];
    };
    try {
      const data = await fetchMovies();
      setMovie(data);
    } catch (error) {
      console.log('Error occurred');
      console.log(error);
    }
  }, []);

  const bgImg = imageBaseUrl + movie?.backdrop_path;

  const styles = makeStyles(theme => ({
    bg: {
      background: `url('${bgImg}') no-repeat center`,
      backgroundSize: 'cover',
      width: '100%',
      height: '450px',
      paddingTop: theme.spacing(6),
    },
    content: {
      height: '100%',
      paddingLeft: '30px',
      color: 'white',
    },
    btnContainer: {
      marginTop: '20px',
    },
    btn: {
      marginRight: '10px',
      background: 'white',
    },
  }));

  const classes = styles();

  return (
    <div className={classes.bg}>
      <Grid container alignItems="center" className={classes.content}>
        <Grid item xs={10} md={5} lg={4}>
          <Typography variant="h4" className={classes.heading}>
            {movie?.name}
          </Typography>
          <Typography variant="body2">
            {movie?.overview}
          </Typography>
          <div className={classes.btnContainer}>
            <Button
              className={classes.btn}
              variant="outlined"
              size="large"
              color="secondary"
            >
              Play
            </Button>
            <Button
              className={classes.btn}
              variant="outlined"
              size="large"
              color="secondary"
            >
              Details
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

// Banner.propTypes = {
//   bgImg: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Banner;
