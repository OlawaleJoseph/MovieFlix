import React from 'react';
import PropTypes from 'prop-types';

function Filter({ handleFilter, genres }) {
  console.log('Genres', genres);
  return (
    <div className="d-flex align-items-center">
      <div className="d-flex align-items-center">
        <label htmlFor="categoryFilter" className="mr-3">
          Genre:
          <select className="form-control" name="categoryFilter" id="categoryFilter" onChange={handleFilter}>
            {['All', ...genres].map(category => <option key={category}>{category}</option>)}
          </select>
        </label>
      </div>
    </div>
  );
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filter;
