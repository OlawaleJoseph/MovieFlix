import HomePage from '../../pages/HomePage';
import Row from '../../containers/MovieRow';
import Banner from '../../components/Banner';
import shallowWrapper from '../../testSetup';

describe('Home page', () => {
  const page = shallowWrapper(HomePage);

  test('should render home page', () => {
    expect(page).toBeTruthy();
    expect(page).toMatchSnapshot();
  });

  test('should render Banner', () => {
    const movieDescription = page.find(Banner);

    expect(movieDescription).toHaveLength(1);
  });

  test('should render Moview Row', () => {
    const row = page.find(Row);

    expect(row).toHaveLength(5);
  });
});
