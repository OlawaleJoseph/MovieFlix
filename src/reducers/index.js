import { combineReducers } from 'redux';
import filter from './filter';
import genres from './genre';

export default combineReducers({
  filter,
  genres,
});
