import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { scroller } from 'react-scroll';
import { Button, ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles({
  typoStyle: {
    flex: 1,
    zIndex: '100000',
  },
  appStyle: {
    backgroundColor: 'black',
  },
});

const scrollToElement = (element) => {
  scroller.scrollTo(element, {
    duration: 1000,
    delay: 100,
    smooth: true,
  });
};

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appStyle} position='fixed' color='primary'>
      <Toolbar className='toolbar'>
        <div className={classes.typoStyle}>
          <img
            className='coffeelogo'
            src='haus.png'
            alt='logo'
            onClick={() => {
              scrollToElement('Toolbar');
            }}
          />
        </div>

        <ButtonGroup style={{ padding: '0.2rem' }}>
          <Button
            variant='text'
            style={{
              marginRight: '1rem',
              padding: '1rem',
              color: 'white',
              borderRadius: '0px',
            }}
            onClick={() => {
              scrollToElement('Menu');
            }}
          >
            MENU
          </Button>

          <Button
            variant='text'
            style={{
              marginRight: '1rem',
              padding: '0.7rem',
              color: 'white',
            }}
            onClick={() => {
              scrollToElement('Gallery');
            }}
          >
            GALLERY
          </Button>

          <Button
            variant='text'
            style={{
              marginRight: '1rem',
              padding: '0 1rem',
              // paddingRight: '1rem',
              color: 'white',
            }}
            onClick={() => {
              scrollToElement('Contact');
            }}
          >
            ABOUT
          </Button>

          <Button
            variant='text'
            style={{
              marginRight: '1rem',
              padding: '0.6rem',
              color: 'white',
              borderRadius: '0px',
            }}
            onClick={() => {
              scrollToElement('Contact');
            }}
          >
            CONTACT
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
