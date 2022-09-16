import React from 'react';
import './Projects.css';
import Card from './Card';

function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className='projects-header-container'>
        <h1 className='projects-header'>Projects</h1>
      </div>
      <div className='cards-wrapper'>
        <Card
          titleText='Soft Body Physics'
          technologiesText='C++, OpenGL, SDL2'
          backgroundImage='./img/softbody.gif'
          descriptionText='2D physics simulation that uses a spring-mass model to mimic the behaviour of soft-body entities'
          buttons={[{key: 0, title: 'GitHub', link: 'www.youtube.com'}]}
          videoLink="https://www.youtube.com/embed/rHowtGzbJ6Y"
          />
        <Card
          titleText='Heaviside - Mobile Game'
          technologiesText='Unity, C#, Cg/HLSL'
          backgroundImage='./img/Heaviside_portrait.png'
          descriptionText='iOS infinite scrolling game with visual effects created from scratch using shaders'
          videoLink="https://www.youtube.com/embed/VSKHjNh0v8Q"
        />
        <Card
          titleText='Hemoworld - Mobile Game'
          technologiesText='Unity, C#'
          backgroundImage='./img/Hemoworld_landscape.png'
          descriptionText='Educational mobile game created in part of the DATCH project (Developmentally Appropriate Tools for Children with Hemophilia).'
          videoLink="https://www.youtube.com/embed/2w3qe4ncUpk"
        />
        <Card
          titleText='Pathfinding & Maze Generation'
          technologiesText='C++, SDL2'
          backgroundImage='./img/pathfinding.gif'
          descriptionText='Sandbox tool that lets the user compare different pathfinding algorithms on user drawn and randomly generated mazes.'
          buttons={[{key: 0, title: 'GitHub', link: 'www.youtube.com'}]}
          videoLink="https://www.youtube.com/embed/9d7itqKcK10"
        />
        <Card
          titleText='Hover Rocket - Mobile Game'
          technologiesText='Unity, C#, Cg/HLSL'
          descriptionText='iOS and Android mobile game where the user pilots a rocket through a cave system'
          backgroundImage='./img/Hover_Rocket_landscape.png'
          videoLink="https://www.youtube.com/embed/mrfjiK40Wcg"
        />
        <Card
          titleText='Billiards'
          technologiesText='C++, OpenGL, SDL2'
          backgroundImage='./img/billiards.gif'
          descriptionText='Billiards game with realistic collision physics, and a pool cue with shot intensity mechanics'
          buttons={[{key: 0, title: 'GitHub', link: 'www.youtube.com'}]}
          videoLink="https://www.youtube.com/embed/SN1hIYnKvBE"
        />
      </div>
    </div>
  );
}

export default Projects;
