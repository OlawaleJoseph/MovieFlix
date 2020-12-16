import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../components/MovieCard';

const useStyles = makeStyles(theme => ({
  container: {
    flexWrap: 'nowrap',
    'overflow-x': 'scroll',
    padding: theme.spacing(2, 0),
  },
  'container::-webkit-scrollbar': {
    width: '50px',
  },
}));
function MovieRow({ title, movies }) {
  const classes = useStyles();

  return (
    <div className="container">
      <section>
        <h5 className="section__heading">{title}</h5>
        <Grid className={`${classes.container} scrollbar`} container spacing={3}>
          {movies.map(({ id, imageUrl }) => (
            <Grid item key={id}>
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
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieRow;
