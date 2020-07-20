import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  typoStyle: {
    flex: 1,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.typoStyle}> PROJECT NAME </Typography>
        <MenuIcon></MenuIcon>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
