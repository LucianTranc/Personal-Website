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
      <div className='hero-content-link-container'>
        <a className='hero-content-link' href='/img/Lucian_Tranc_Resume.pdf'>Resume</a>
        <p>or</p>
        <a className='hero-content-link' href='/img/Lucian_Tranc_Resume.pdf'>Contact</a>
      </div>
    </div>
    </ScrollFadeSection>
  );
}

export default Hero;
