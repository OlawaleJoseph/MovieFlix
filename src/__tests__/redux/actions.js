import filterAction from '../../actions/filter';
import { FILTER_BOOK } from '../../actions/type';

describe('Filter Action', () => {
  test('should generate an filter action', () => {
    const id = 10;
    const actionObj = filterAction(id);

    expect(actionObj).toEqual({
      type: FILTER_BOOK,
      payload: id,
    });
    expect(actionObj).not.toEqual({});
  });
});

describe('Genre Action', () => {
  test('should create action for genres', () => {
    const genres = [1, 2, 3, 4, 5];
    const genreObj = filterAction(genres);

    expect(genreObj).toEqual({
      type: FILTER_BOOK,
      payload: genres,
    });
    expect(genreObj).not.toEqual([]);
  });
});
