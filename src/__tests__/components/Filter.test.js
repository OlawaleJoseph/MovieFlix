import { InputLabel, MenuItem, Select } from '@material-ui/core';
import Filter from '../../components/Filter';
import shallowWrapper from '../../testSetup';

describe('Filter Component', () => {
  const filterMock = jest.fn();

  const filterProps = {
    handleFilter: filterMock,
    genres: ['comedey', 'horror', 'sci-fi'],
  };

  const filter = shallowWrapper(Filter, filterProps);

  test('should render', () => {
    expect(filter).toBeTruthy();
    expect(filter).toMatchSnapshot();
  });

  test('should have select element with label', () => {
    const filterLabel = filter.find(InputLabel);
    const select = filter.find(Select);
    const options = filter.find(MenuItem);
    expect(filterLabel.text()).toEqual('Filter By Genre: ');
    expect(select).toHaveLength(1);
    expect(options).toHaveLength(filterProps.genres.length + 1);
  });

  test('should call handle filter on selection change', () => {
    const select = filter.find(Select);
    select.simulate('change', { target: { value: 'comedy' } });

    expect(filterMock).toHaveBeenCalled();
  });
});
