import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-stars.mp4' autoPlay loop muted />
      <h1>Hi, I'm Lucian</h1>
      <p>Computer Science Co-op Student</p>
      <div className='hero-btns'>
        <Button
          to='/contact'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
