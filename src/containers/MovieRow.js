/* eslint-disable camelcase */
import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../components/MovieCard';
import Filter from '../components/Filter';
import fetch from '../helpers/data';
import { imageBaseUrl } from '../helpers/constants';
import { filterMovies } from '../helpers/common';
import filterAction from '../actions/filter';

const useStyles = makeStyles(theme => ({
  itemRoot: {
    padding: '0 !important',
  },
  container: {
    flexWrap: 'nowrap',
    'overflow-x': 'scroll',
    padding: theme.spacing(2, 0),
  },
  heading: {
    padding: '15px 0',
  },
}));
function MovieRow({
  title, moviesUrl, filterParam, moviesFilter, id,
}) {
  const classes = useStyles();
  const [movies, setMovies] = useState(null);
  const [parentSection, setParentsection] = useState('');
  const [genres, setGenres] = useState([]);
  useEffect(async () => {
    const fetchMovies = async () => {
      const { data: { results } } = await fetch.get(moviesUrl);

      return results.map(({ id, poster_path, genre_ids }) => ({
        id,
        imageUrl: imageBaseUrl + poster_path,
        genreIds: genre_ids,
      }));
    };
    try {
      const data = await fetchMovies();
      setMovies(data);
      setGenres(data.map(({ genreIds }) => genreIds).flat());
    } catch (error) {
      console.log('Error occurred');
      console.log(error);
    }
  }, []);

  const handleFilter = e => {
    const section = e.target.closest('section');
    if (id === section.id) {
      moviesFilter(e.target.value);
      setParentsection(section);
    }
  };

  const setMoviesToDisplay = parent => {
    if (parent.id === id) return filterMovies(movies, filterParam);
    return movies;
  };

  const allMovies = setMoviesToDisplay(parentSection);

  return (
    <div className="container">
      <section id={id}>
        <Grid className={classes.heading} container justify="space-between" alignItems="center">
          <Grid item>
            <h5 className="section__heading">{title}</h5>
          </Grid>
          <Grid item>
            <Filter handleFilter={handleFilter} genres={genres} />
          </Grid>
        </Grid>
        <Grid className={`${classes.container} scrollbar`} container spacing={3}>
          {allMovies?.map(({ id, imageUrl }) => (
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
  filterParam: PropTypes.string.isRequired,
  moviesFilter: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  filterParam: state.filter,
});

const mapDispatchToProps = dispatch => ({
  moviesFilter: param => dispatch(filterAction(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieRow);
