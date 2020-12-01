import React from 'react';
import '../App.css';
import ProjectsHero from '../components/ProjectsHero';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

function Projects() {
  return (
    <>
      <ProjectsHero />
      <Cards />
      <Footer />

      {/*<Cards />
      <Footer />*/}
    </>
  );
}

export default Projects;