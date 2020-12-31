import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Buttons } from './button2';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/friendswalking.mp4' autoPlay loop muted />
      <h1>Fashion AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          VIEW PRODUCTS
        </Button>
        <Buttons
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          LEARN MORE <i className='far fa-play-circle' />
        </Buttons>
      </div>
    </div>
  );
}

export default HeroSection;