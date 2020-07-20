import React from 'react';
import Header from './components/Header';
import { Grid } from '@material-ui/core';

const App = () => {
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container style={{ background: 'blue' }}>
        <Grid style={{ background: 'yellow' }} xs={12} xl={12}>
          conainter item
        </Grid>
        CONTENT
      </Grid>
    </Grid>
  );
};

export default App;
