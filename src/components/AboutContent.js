import React from 'react';
import '../App.css';
import './AboutContent.css';

function AboutContent() {
  return (
    <div className="about-content-container">
      <img src="/img/headshot.JPG" alt = "headshot"/>
      <p> 
        Welcome to my personal website! My name is Lucian Tranc and I'm in my third year at the University of Guelph, studying Computer Science and Mathematics in the Co-op Bachelor of Computing program.
        I'm currently searching for an internship for Summer 2021. Check out my "Projects" page
        to see what I've been working on and some of my skills.
      </p>
    </div>
  );
}
export default AboutContent;
