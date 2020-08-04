import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import { Grid } from '@material-ui/core';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <>
      <Grid container direction='column'>
        <Grid item container>
          <Element name='Toolbar'>
            <Header />
          </Element>
        </Grid>

        <Grid item container>
          <Content />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
