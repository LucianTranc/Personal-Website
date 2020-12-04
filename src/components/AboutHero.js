import React from 'react';
import '../App.css';
import { Button } from './Button';
import './AboutHero.css';

function AboutHero() {
  return (
    <div className='about-hero-container'>
      <video src='/videos/video-stars.mp4' autoPlay loop muted />
      <h1>Hi, I'm Lucian</h1>
      <p>Computer Science Co-op Student</p>
      <div className='about-hero-btns'>
        <Button
          to='/contact'
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default AboutHero;
