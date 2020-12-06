import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

function Projects() {
  return (
    <>
      <Hero
        isVideo={true}
        backgroundSource='/videos/hrsmall.mp4'
        header='Projects'
        subheader='Mobile Games, Web Apps, Algorithm Visualizations and more'
      />
      <Cards />
      <Footer />
    </>
  );
}

export default Projects;