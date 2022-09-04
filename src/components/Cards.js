import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import FadeInSection from './FadeInSection';

function CardsTwo() {
  return (
    <div className='cards' id='cards'>
      <FadeInSection>
        <div className='projects-header-container'>
          <h1 className='projects-header'>Projects</h1>
        </div>
      </FadeInSection>
      <div className='cards-wrapper'>
        <FadeInSection>
          <CardItem
            titleText='Soft Body Physics'
            technologiesText='C++, OpenGL, SDL2'
            backgroundImage='./img/softbody.gif'
            descriptionText='Programmed a simulation that mimics the behaviour of deformable objects using a spring-mass model.
                              Developed a physics engine that uses Hooke’s Law and Euler Integration to calculate spring forces'
            buttons={[{key: 0, title: 'GitHub', link: 'www.youtube.com'}]}
            />
        </FadeInSection>
        <FadeInSection>
          <CardItem
            titleText='Pathfinding & Maze Generation'
            technologiesText='C++, SDL2'
            backgroundImage='./img/pathfinding.gif'
            descriptionText='Created a tool that visualizes the differences of pathfinding algorithms like A*, Dijkstra, BFS, DFS, and
                              designed a GUI that allows users to compare algorithms on user drawn and randomly generated mazes'
            buttons={[{key: 0, title: 'GitHub', link: 'www.youtube.com'}]}
          />
        </FadeInSection>
        <FadeInSection>
          <CardItem
            titleText='Heaviside'
            technologiesText='Unity, C#, Cg/HLSL'
            backgroundImage='./img/maze.png'
          />
        </FadeInSection>
        <FadeInSection>
          <CardItem
            titleText='Hemoworld'
            technologiesText='Unity, C#'
            backgroundImage='./img/tetris.gif'
          />
        </FadeInSection>
        <FadeInSection>
          <CardItem
            titleText='Hover Rocket'
            technologiesText='Unity, C#, Cg/HLSL'
            backgroundImage='./img/maze.png'
          />
        </FadeInSection>
        <FadeInSection>
          <CardItem
            titleText='Billiards'
            technologiesText='C++, OpenGL, SDL2'
            backgroundImage='./img/billiards.gif'
            descriptionText='Developed a Billiards game with realistic collision physics, and a pool cue with shot intensity mechanics'
            buttons={[{key: 0, title: 'GitHub', link: 'www.youtube.com'}]}
          />
        </FadeInSection>
      </div>
    </div>
  );
}

export default CardsTwo;
