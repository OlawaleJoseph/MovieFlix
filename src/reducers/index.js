import { combineReducers } from 'redux';
import filter from './filter';
import genres from './genre';
import movie from './movie';

export default combineReducers({
  filter,
  genres,
  movie,
});
