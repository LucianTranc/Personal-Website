import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import CoopContent from '../components/CoopContent';
import Footer from '../components/Footer';

function Coop() {
  return (
    <>
      <Hero
        isVideo={false}
        backgroundSource='/img/jellyfish.jpg'
        header='Co-op Placements'
        subheader="Reflections from my past Co-op experiences"
      />
      <CoopContent/>
      <Footer/>
    </>
  );
}

export default Coop;