import { Button } from '@material-ui/core';
import { MovieCard } from '../../components/MovieCard';
import shallowWrapper from '../../testSetup';
// imgUrl, handleTrailerClick, name, setMovie, id, overview, releaseDate, genres,
describe('Movie Card', () => {
  const movieInfo = {
    imgUrl: 'imageUrl',
    name: 'Test',
    handleTrailerClick: jest.fn(),
    setMovie: jest.fn(),
    id: 3,
    overview: 'Movie Description',
    releaseDate: '2020-12-10',
    genres: [1, 2, 3, 4],
  };

  const card = shallowWrapper(MovieCard, movieInfo);

  test('should render', () => {
    expect(card).toBeTruthy();
    expect(card).toMatchSnapshot();
  });

  test('should have a image url', () => {
    const image = card.find('img');
    expect(image.prop('src')).toEqual(movieInfo.imgUrl);
  });

  test('should render Trailer button', () => {
    const buttons = card.find(Button);

    expect(buttons).toHaveLength(2);
    expect(buttons.first().text()).toContain('Trailer');
  });

  test('should render details button', () => {
    const buttons = card.find(Button);

    expect(buttons).toHaveLength(2);
    expect(buttons.last().text()).toContain('Details');
  });
});
