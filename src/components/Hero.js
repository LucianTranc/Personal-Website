import React from 'react';
import '../App.css';
import './Hero.css';

function Hero(props) {

  const isVideo = props.isVideo;
  const backgroundSource = props.backgroundSource;
  const header = props.header;
  const subheader = props.subheader;

  var background;

  if (isVideo)
  {
    background = <video src={backgroundSource} autoPlay loop muted />
  }
  else
  {
    background = <img src={backgroundSource} alt='background hero graphic'/>

  }

  return (
    <div className='hero-container'>
      {background}
      <h1>{header}</h1>
      <p>{subheader}</p>
    </div>
  );
}

export default Hero;
