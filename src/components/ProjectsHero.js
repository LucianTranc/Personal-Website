import React from 'react';
import '../App.css';
import './ProjectsHero.css';

function ProjectsHero() {
  return (
    <div className='projects-hero-container'>
      <video src='/videos/hrsmall.mp4' autoPlay loop muted />
      <h1>Projects</h1>
      <p>Mobile Games, Web Apps, Algorithm Visualizations and more</p>
    </div>
  );
}

export default ProjectsHero;
