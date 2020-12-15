import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles, Grid, Typography, Button,
} from '@material-ui/core';

const Banner = ({ bgImg, desc }) => {
  const styles = makeStyles(theme => ({
    bg: {
      background: `url('${bgImg}') no-repeat center`,
      backgroundSize: 'cover',
      width: '100%',
      height: '450px',
      paddingTop: theme.spacing(6),
    },
    content: {
      height: '100%',
      paddingLeft: '30px',
    },
    btnContainer: {
      marginTop: '20px',
    },
    btn: {
      marginRight: '10px',
    },
  }));

  const classes = styles();

  return (
    <div className={classes.bg}>
      <Grid container alignItems="center" className={classes.content}>
        <Grid item xs={10} md={5} lg={4}>
          <Typography variant="body2" color="white">
            {desc}
          </Typography>
          <div className={classes.btnContainer}>
            <Button
              className={classes.btn}
              variant="outlined"
              size="large"
              color="secondary"
            >
              Play
            </Button>
            <Button
              className={classes.btn}
              variant="outlined"
              size="large"
              color="secondary"
            >
              Details
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Banner.propTypes = {
  bgImg: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Banner;
