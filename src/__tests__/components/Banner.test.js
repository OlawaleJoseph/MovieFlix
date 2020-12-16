import { Typography, Button } from '@material-ui/core';
import Banner from '../../components/Banner';
import shallowWrapper from '../../testSetup';

describe('Hero Section', () => {
  const movieInfo = {
    bgImg: 'imageUrl',
    desc: 'movie description',
  };

  const hero = shallowWrapper(Banner, movieInfo, true);

  test('should render Banner', () => {
    expect(hero).toBeTruthy();
    expect(hero).toMatchSnapshot();
  });

  test('should have a movie title and description', () => {
    const movieDescription = hero.find(Typography);

    expect(movieDescription).toHaveLength(2);
  });

  test('should render play button', () => {
    const buttons = hero.find(Button);

    expect(buttons).toHaveLength(2);
    expect(buttons.first().text()).toContain('Play');
  });

  test('should render play button', () => {
    const buttons = hero.find(Button);

    expect(buttons).toHaveLength(2);
    expect(buttons.last().text()).toContain('Details');
  });
});
