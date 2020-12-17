import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ imgUrl, handleTrailerClick, name }) => (
  <div className="movieCard">
    <div className="inner">
      <div className="front">
        <img src={imgUrl} alt="Movie Poster" />
      </div>
      <div className="back">
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          onClick={() => handleTrailerClick(name)}
        >
          Trailer
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="secondary"
        >
          Details
        </Button>
      </div>
    </div>

  </div>
);

MovieCard.defaultProps = {
  imgUrl: '',
};

MovieCard.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleTrailerClick: PropTypes.func.isRequired,
};

export default MovieCard;
