import { Button } from '@material-ui/core';
import Card from '../../components/MovieCard';
import shallowWrapper from '../../testSetup';

describe('Movie Card', () => {
  const movieInfo = {
    imgUrl: 'imageUrl',
  };

  const card = shallowWrapper(Card, movieInfo);

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
