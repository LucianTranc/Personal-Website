import React from 'react';
import './Projects.css';
import Card from './Card';

function Projects(props) {

  return (
    <div className='projects' ref={props.projectsRef}>
      <div className='projects-header-container'>
        <h1 className='projects-header'>Projects</h1>
      </div>
      <div className='cards-wrapper'>
        <Card
          titleText='Soft Body Physics'
          technologiesText='C++, OpenGL, SDL2'
          backgroundImage='./img/softbody.gif'
          descriptionText='2D physics simulation that uses a spring-mass model to mimic the behaviour of soft-body entities'
          buttons={[{key: 0, title: 'GitHub', link: 'https://github.com/LucianTranc/2D_Soft_Body'}]}
          videoLink="https://www.youtube.com/embed/rHowtGzbJ6Y"
          />
        <Card
          titleText='Heaviside - Mobile Game'
          technologiesText='Unity, C#, Cg/HLSL'
          backgroundImage='./img/Heaviside_portrait.png'
          descriptionText='iOS infinite scrolling game with visual effects created from scratch using HLSL shaders'
          videoLink="https://www.youtube.com/embed/VSKHjNh0v8Q"
        />
        <Card
          titleText='Hemoworld - Mobile Game'
          technologiesText='Unity, C#'
          backgroundImage='./img/Hemoworld_landscape.png'
          descriptionText='Educational mobile game created in part of the DATCH project (Developmentally Appropriate Tools for Children with Hemophilia).'
          videoLink="https://www.youtube.com/embed/2w3qe4ncUpk"
          buttons={[{key: 0, title: 'App Store', link: "https://apps.apple.com/ca/app/hemoworld/id1622831666"},
                    {key: 1, title: 'DATCH Project', link: "https://www.mydatch.com/"},
                    {key: 2, title: 'JTH Publication', link: "https://abstracts.isth.org/abstract/the-datch-project-developmentally-appropriate-tools-for-children-with-hemophilia-to-help-them-better-understand-their-disease/"}]}
        />
        <Card
          titleText='Pathfinding & Maze Generation'
          technologiesText='C++, SDL2'
          backgroundImage='./img/pathfinding.gif'
          descriptionText='Sandbox tool that lets the user compare different pathfinding algorithms on user drawn and randomly generated mazes.'
          buttons={[{key: 0, title: 'GitHub', link: 'https://github.com/LucianTranc/Pathfinding'}]}
          videoLink="https://www.youtube.com/embed/9d7itqKcK10"
        />
        <Card
          titleText='Hover Rocket - Mobile Game'
          technologiesText='Unity, C#, Cg/HLSL'
          descriptionText='iOS and Android mobile game where the user pilots a rocket through a cave system'
          backgroundImage='./img/Hover_Rocket_landscape.png'
          buttons={[{key: 0, title: 'App Store', link: "https://apps.apple.com/ca/app/hover-rocket-adventure/id1532670959"},
                    {key: 1, title: 'Google Play Store', link: "https://play.google.com/store/apps/details?id=com.Loogames.HoverRocket&hl=en_CA&gl=US"}]}
          videoLink="https://www.youtube.com/embed/mrfjiK40Wcg"
        />
        <Card
          titleText='Billiards'
          technologiesText='C++, OpenGL, SDL2'
          backgroundImage='./img/billiards.gif'
          descriptionText='Billiards game with realistic collision physics, and a pool cue with shot intensity mechanics'
          buttons={[{key: 0, title: 'GitHub', link: 'https://github.com/LucianTranc/OpenGL_Billiards'}]}
          videoLink="https://www.youtube.com/embed/SN1hIYnKvBE"
        />
      </div>
    </div>
  );
}

export default Projects;
