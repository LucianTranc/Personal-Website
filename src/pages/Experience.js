import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import ExperienceContent from '../components/ExperienceContent';
import Footer from '../components/Footer';

function Experience() {
  return (
    <>
      <Hero
        isVideo={false}
        backgroundSource='/img/city.jpg'
        header='Experience'
        subheader="Skills and experiences I've gained from my previous work"
      />
      <ExperienceContent/>
      <Footer/>
    </>
  );
}

export default Experience;