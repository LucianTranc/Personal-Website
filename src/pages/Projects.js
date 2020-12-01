import React from 'react';
import '../App.css';
import ProjectsHero from '../components/ProjectsHero';
import Aboutme from '../components/Aboutme';
import Footer from '../components/Footer';

function Projects() {
  return (
    <>
      <ProjectsHero />
      <Aboutme />
      <Footer />
      {/*<Cards />
      <Footer />*/}
    </>
  );
}

export default Projects;