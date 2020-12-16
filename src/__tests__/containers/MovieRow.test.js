// import { Typography, Button } from '@material-ui/core';
import Row from '../../containers/MovieRow';
import MovieCard from '../../components/MovieCard';
import shallowWrapper from '../../testSetup';

describe('Movie Row', () => {
  const rowInfo = {
    title: 'Test',
    movies: [{
      id: 'id',
      imageUrl: 'imageurl',
    }],
  };

  const row = shallowWrapper(Row, rowInfo);

  test('should render Movie Row', () => {
    expect(row).toBeTruthy();
    expect(row).toMatchSnapshot();
  });

  test('should have a title', () => {
    const movieDescription = row.find('.section__heading');

    expect(movieDescription).toHaveLength(1);
    expect(movieDescription.text()).toEqual(rowInfo.title);
  });

  test('should render movies', () => {
    const movies = row.find(MovieCard);

    expect(movies).toHaveLength(rowInfo.movies.length);
  });
});
