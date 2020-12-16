import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ imgUrl }) => (
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

MovieCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default MovieCard;
