import React from 'react';
import '../App.css';
import './Hero.css';
import ScrollFadeSection from './ScrollFadeSection';


function Hero(props) {
  return (
    <ScrollFadeSection>
    <div className='hero-container' ref={props.aboutRef}>
      <p className='hero-name'>LUCIAN TRANC</p>
      <h1>Software Developer</h1>
      <p>4th year Computer Science student at the University of Guelph with a passion for game development, graphics/shader programming and C++ development</p>
      <div className='hero-content-link-container'>
        <a className='hero-content-link' href='/img/Lucian_Tranc_Resume.pdf' target="_blank" rel="noreferrer">Resume</a>
        <p>-</p>
        <a className='hero-content-link' href='https://www.linkedin.com/in/luciantranc/' target="_blank" rel="noreferrer">LinkedIn</a>
        <p>-</p>
        <a className='hero-content-link' href='https://github.com/LucianTranc' target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
    </ScrollFadeSection>
  );
}

export default Hero;
