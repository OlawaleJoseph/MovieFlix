import {
  AppBar, Toolbar, makeStyles,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/logo.png';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    transition: 'all 1s',
  },
  logo: {
    width: '140px',
    height: '30px',
  },
});

const NavBar = () => {
  const classes = useStyles();
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    });

    return () => window.removeEventListener('scroll');
  }, []);

  return (
    <AppBar className={`${classes.root} ${navBg ? 'Nav__show' : ''}`} position="fixed">
      <Toolbar variant="dense">
        <img className={classes.logo} src={Logo} alt="Brand logo" />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
