import { Typography, Button } from '@material-ui/core';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import MockAdapter from 'axios-mock-adapter';
import Enzyme, { mount } from 'enzyme';
import Banner from '../../components/Banner';

Enzyme.configure({ adapter: new Adapter() });

describe('Hero Section', () => {
  // const movieInfo = {
  //   bgImg: 'imageUrl',
  //   desc: 'movie description',
  // };

  const hero = mount(<Banner />);

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
