/* eslint-disable camelcase */
import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../components/MovieCard';
import fetch from '../helpers/data';
import { imageBaseUrl } from '../helpers/constants';

const useStyles = makeStyles(theme => ({
  itemRoot: {
    padding: '0 !important',
  },
  container: {
    flexWrap: 'nowrap',
    'overflow-x': 'scroll',
    padding: theme.spacing(2, 0),
  },
  'container::-webkit-scrollbar': {
    width: '50px',
  },
}));
function MovieRow({ title, moviesUrl }) {
  const classes = useStyles();
  const [movies, setMovies] = useState(null);
  useEffect(async () => {
    const fetchMovies = async () => {
      const { data: { results } } = await fetch.get(moviesUrl);

      return results.map(({ id, poster_path }) => ({
        id,
        imageUrl: imageBaseUrl + poster_path,
      }));
    };
    try {
      const data = await fetchMovies();
      setMovies(data);
    } catch (error) {
      console.log('Error occurred');
      console.log(error);
    }
  }, []);

  return (
    <div className="container">
      <section>
        <h5 className="section__heading">{title}</h5>
        <Grid className={`${classes.container} scrollbar`} container spacing={3}>
          {movies?.map(({ id, imageUrl }) => (
            <Grid className={classes.itemRoot} item key={id}>
              <MovieCard imgUrl={imageUrl} />
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  );
}

MovieRow.propTypes = {
  title: PropTypes.string.isRequired,
  moviesUrl: PropTypes.string.isRequired,
};

export default MovieRow;
