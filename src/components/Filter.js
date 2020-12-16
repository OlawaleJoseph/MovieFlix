import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, InputLabel, makeStyles, MenuItem, Select,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Filter({ handleFilter, genres }) {
  const classes = useStyles();

  return (
    <div className="d-flex align-items-center">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Filter By Genre: </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="genre"
          onChange={handleFilter}
        >
          {['All', ...genres].map(genre => <MenuItem key={genre}>{genre}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filter;
