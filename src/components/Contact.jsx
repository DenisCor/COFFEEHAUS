import React, { useEffect } from 'react';
import coffeetable from '../img/coffetable222.png';
import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  textField: {
    // background: '#b3663d',

    // opacity: 0.75,
    // marginBottom: '1rem',
    width: '100%',
    margin: '0.5rem auto ',
    color: 'white',
    '& .MuiOutlinedInput-root': {
      '&:focused': {
        color: 'white',
      },
      '& fieldset': {
        border: '2px solid white',
        color: 'white', // default
      },
      '&.Mui-focused fieldset': {
        '&:focused': {
          color: 'white',
        },
        border: '2px solid white',
        color: 'white',
      },
    },
    '& .MuiOutlinedInput-root:hover': {
      '& fieldset': {
        border: '2px solid white', // default
      },
      '&.Mui-focused fieldset': {
        '&:focused': {
          color: 'white',
        },
        border: '2px solid white',
        color: 'white',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white',
      fontFamily: 'Big Shoulders Display',
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
  },
});

const Contact = () => {
  const classes = useStyles();
  useEffect(() => {
    window.mapboxgl.accessToken =
      'pk.eyJ1Ijoic2FrYWx1a2UiLCJhIjoiY2tjejd2ajAwMGR4ZDJ6dnBoOHhvZjB4YSJ9.QhNdzsSs2CsEtQv7AqFmGg';
    var map = new window.mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/sakaluke/ckczsseuj0d3x1iufbbqh5p5s', // stylesheet location
      center: [-3.188267, 55.953251], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    var el = document.createElement('div');
    el.className = 'marker';
    var marker = new window.mapboxgl.Marker(el)
      .setLngLat([-3.188267, 55.953251])
      .addTo(map)
      .setPopup(new window.mapboxgl.Popup().setHTML('<h4>COFFEEHAUS</h4>'));
  });

  return (
    <div>
      <Grid
        container
        direction='row'
        xl={12}
        xs={12}
        className='contact-container'
        style={{
          height: window.innerHeight,
          width: window.innerWidth,
          // overflowX: 'hidden',
        }}
      >
        <Grid item xl={6} xs={12} className='contact-text'>
          <h1>GET IN TOUCH</h1>
          {/* <hr style={{ border: 'white solid 2px' }} /> */}
          <p>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quibusdam maiores harum similique non doloremque vero recusandae
            ipsa eligendi, magni voluptatem assumenda dolorem illum ullam saepe
            qui nisi! Labore, distinctio. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolore quibusdam maiores harum similique non
            doloremque vero !Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolore quibusdam maiores harum similique non doloremque vero
            recusandae ipsa eligendi, magni voluptatem assumenda dolorem illum
            ullam saepe qui nisi! Labore, distinctio. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolore quibusdam maiores harum
            similique non doloremque vero !
          </p>
          <h2>Address: 123 Fiction Street, Edinburgh, E12 3H5 </h2>
          <h2>Email: coffeehaus@email.com </h2>
          <h2>Tel: 123-456-7890 </h2>
        </Grid>
        <Grid
          item
          xs={12}
          xl={6}
          md={12}
          id='map'
          className='contact-map'
        ></Grid>
        <Grid
          item
          xl={6}
          xs={12}
          style={{ marginTop: '0rem', textAlign: 'center' }}
        >
          <div className='contact-form' item xs={12} xl={6}>
            <form noValidate autoComplete='off'>
              <TextField
                label='Enter Name'
                variant='outlined'
                className={classes.textField}
              />
              <br />
              <TextField
                label='Enter Email'
                variant='outlined'
                className={classes.textField}
              />
              <br />
              <TextField
                label='Enter Email'
                variant='outlined'
                multiline
                label='Type Message'
                rows='10'
                margin='normal'
                className={classes.textField}
              />
              <br />

              <Button
                variant='contained'
                style={{ marginTop: '0.5rem', width: '10rem', fontSize: '800' }}
              >
                SUBMIT
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xl={6} xs={12}></Grid>
      </Grid>
    </div>
  );
};

export default Contact;
