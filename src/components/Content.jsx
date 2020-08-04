import React, { useEffect } from 'react';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CarouselContainer from './CarouselContainer';
import { Element } from 'react-scroll';
import anime from 'animejs';

const Content = () => {
  useEffect(() => {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 2500,
        delay: (el, i) => 200 * i,
      })
      .add({
        targets: '.ml2',
        opacity: 0,
        duration: 3000,
        easing: 'easeOutExpo',
        delay: 2000,
      });
  }, []);

  return (
    <>
      <div>
        <div className='vidbox'>
          <div className='coffeehaus'>
            <h1 className='ml2'>COFFEE HAUS</h1>
          </div>
          <div className='socialmedia-main'>
            <div style={{ paddingLeft: '1rem' }}>
              {' '}
              <IconButton
                color='inherit'
                aria-label='add an alarm'
                size='small'
                onClick={() =>
                  window.open('https://www.facebook.com/GooseFxStudio')
                }
              >
                <img
                  className='socialmedia-icon '
                  src='facebook-icon.png'
                  alt='social media icon'
                />
              </IconButton>
              <br />
              <IconButton
                color='inherit'
                aria-label='add an alarm'
                size='small'
                onClick={() => window.open('https://twitter.com/fx_goose')}
              >
                <img
                  className='socialmedia-icon'
                  src='twitter-icon.png'
                  alt='social media icon'
                />
              </IconButton>
              <br />
              <IconButton
                color='inherit'
                aria-label='add an alarm'
                size='small'
                onClick={() =>
                  window.open('https://www.instagram.com/goose_fx/')
                }
              >
                <img
                  className='socialmedia-icon'
                  src='instagram-icon.png'
                  alt='social media icon'
                />
              </IconButton>
            </div>

            <h3>
              SCROLL
              <ExpandMoreIcon fontSize='large' />
            </h3>
          </div>
          <div className='vidoverlay'></div>
          <div>
            <video
              src='coffehaus222.mp4'
              type='video/mp4'
              autoPlay
              loop
              muted
              style={{
                display: 'block',
                width: window.innerWidth,
                marginTop: '1rem',
              }}
            ></video>
          </div>
        </div>

        {/* <About /> */}
        <Element name='Gallery'>
          <CarouselContainer />
        </Element>
        <Element name='Menu'>
          <Menu />
        </Element>
        <Element name='Contact'>
          <Contact />
        </Element>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Content;
