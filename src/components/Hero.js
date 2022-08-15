import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';
import ScrollFadeSection from './ScrollFadeSection';


function Hero() {
  return (
    <ScrollFadeSection>
      <div className='hero-container'>
        <p className='hero-name'>LUCIAN TRANC</p>
        <h1>Software Developer</h1>
        <p>4th year Computer Science student at the University of Guelph with a passion for game development, graphics/shader programming and C++ development</p>
        <div className='hero-btns'>
          <Button
            to='/contact'
          >
            Contact
          </Button>
          <a href='/img/Lucian_Tranc_Resume.pdf' target="_blank" rel="noreferrer" className='download-button'>Resume</a>
        </div>
      </div>
    </ScrollFadeSection>
  );
}

export default Hero;
