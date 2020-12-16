import Row from '../../containers/MovieRow';
import shallowWrapper from '../../testSetup';

describe('Movie Row', () => {
  const rowInfo = {
    title: 'Test',
    moviesUrl: 'moviesurl',
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
});
