import React from 'react';
import Banner from '../components/Banner';
import MovieRow from '../containers/MovieRow';
import { urls } from '../helpers/constants';

const HomePage = () => (
  <div>
    <Banner />
    <MovieRow title="Popular Movies" moviesUrl={urls.moviePopular} />
    <MovieRow title="Popular Tv Shows" moviesUrl={urls.popularTv} />
    <MovieRow title="Top Rated Movies" moviesUrl={urls.topRatedMovie} />
    <MovieRow title="Top Rated Tv Shows" moviesUrl={urls.topRatedTv} />
    <MovieRow title="Upcoming" moviesUrl={urls.upcoming} />
  </div>
);

export default HomePage;
