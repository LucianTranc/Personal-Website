import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import Aboutme from '../components/Aboutme';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <HeroSection />
      <Aboutme />
      <Footer />
      {/*<Cards />
      <Footer />*/}
    </>
  );
}

export default About;
