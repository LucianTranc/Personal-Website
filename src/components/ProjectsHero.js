import React from 'react';
import '../App.css';
import './ProjectsHero.css';

function ProjectsHero() {
  return (
    <div className='hero-container'>
      <video src='/videos/hr.mp4' autoPlay loop muted />
      <h1>Projects</h1>
      <p>Mobile Games, Web Apps, Algorithm Visualizations and more</p>
    </div>
  );
}

export default ProjectsHero;
