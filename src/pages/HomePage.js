import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import MovieRow from '../containers/MovieRow';
import { urls } from '../helpers/constants';

const HomePage = () => {
  useEffect(() => {
    
  });
  return (
    <div>
      <Banner />
      <MovieRow id="popularMovies" title="Popular Movies" moviesUrl={urls.moviePopular} />
      <MovieRow id="popularTv" title="Popular Tv Shows" moviesUrl={urls.popularTv} />
      <MovieRow id="topRatedMovies" title="Top Rated Movies" moviesUrl={urls.topRatedMovie} />
      <MovieRow id="topRatedTv" title="Top Rated Tv Shows" moviesUrl={urls.topRatedTv} />
      <MovieRow id="upcoming" title="Upcoming" moviesUrl={urls.upcoming} />
    </div>
  );
};
export default HomePage;
