import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import FadeInSection from '../components/FadeInSection';


function Cards() {
  return (
    <div className='cards'>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <FadeInSection>
            <ul className='cards-items'>
              <CardItem
                src='/img/Hemoworld.gif'
                title='Hemoworld'
                text='Educational mobile game for children with hemophilia. Created as a part of the DATCH project (Developmentally Appropriate Tools for Children with Hemophilia). '
                label='C#, Unity'
                buttonname='YouTube'
                buttonlink='https://www.youtube.com/watch?v=2w3qe4ncUpk&ab_channel=LuciTranc'
                github={false}
                storeLinks={false}
              />
              <CardItem
                src='/img/billiards.gif'
                title='Billiards Game'
                text='Created a Billiards game with realistic physics collision, all rendered using OpenGL'
                label='C++, OpenGL, SDL2'
                github={true}
                githublink='https://github.com/LucianTranc/OpenGL_Billiards'
              />
            </ul>
          </FadeInSection>
          
          <FadeInSection>
            <ul className='cards-items'>
              <CardItem
                src='/img/cppdemo.gif'
                title='2D Game Platform'
                text='Created a 2D Game Engine/Platform from scratch that I plan to use for future projects'
                label='C++, SDL2'
                github={true}
                githublink='https://github.com/LucianTranc/SDL_Game'
              />
              <CardItem
                src='/img/hrdemo.gif'
                title='Hover Rocket'
                text='Mobile game thats available on the iOS Appstore and Google Play store for free'
                label='C#, Unity'
                github={true}
                githublink='https://github.com/LucianTranc/HoverRocketScripts'
                storeLinks={true}
              />
            </ul>
          </FadeInSection>

          <FadeInSection>
            <ul className='cards-items'>
              <CardItem
                src='img/tetris.gif'
                title="Tetris Game"
                text='Tetris game created using Javascript. Try it out!'
                label='Javascript'
                github={true}
                githublink='https://github.com/LucianTranc/Tetris'
                secondbutton={true}
                buttonlink='/LucianTrancTetris.html'
                buttonname='Play&nbsp;Now'
              />
              <CardItem
                src='img/svgeditor.png'
                title='SVG Image Editor Web App'
                text='Image editor for .SVG images files where the user can edit, scale and add or delete image elements'
                label='C, Node.js, Javascript/HTML'
                github={true}
                githublink='https://github.com/LucianTranc/SVG-Image-Editor'
                secondbutton={true}
                buttonlink='https://svg-editor.herokuapp.com/'
                buttonname='View&nbsp;App'
              />
            </ul>
          </FadeInSection>
          
          <FadeInSection>
            <ul className='cards-items'>
              <CardItem
                src='/img/ltwebsite.png'
                title="Lucian Tranc Personal Website"
                text='I developed the website you are currently exploring'
                label='React.js, Javascript/HTML'
                github={true}
                githublink='https://github.com/LucianTranc/Personal-Website'
              />
              <CardItem
                src='img/sudokusolver.gif'
                title='Sudoku Backtracking Algorithm'
                text='Created a visualization of a Sudoku Backtracking algorithm'
                label='Python, Pygame'
                github={true}
                githublink='https://github.com/LucianTranc/SudokuSolver'
              />
            </ul>
          </FadeInSection>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
