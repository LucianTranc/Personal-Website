import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/img/hoverrocket.gif'
              title='Hover Rocket'
              text='Mobile game thats available on the iOS Appstore and Google Play store for free'
              label='C#, Unity'
              github={true}
              githublink='#'
              storeLinks={true}
            />
            <CardItem
              src='images/img-2.jpg'
              title='2D Game Platform'
              text='Created a 2D Game Engine/Platform from scratch that I plan to use for future projects'
              label='C++, SDL2'
              github={true}
              githublink='#'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              title='SVG Image Editor Web App'
              text='Image editor for .SVG images files where the user can edit, scale and add or delete image elements'
              label='C, Node.js, Javascript/HTML'
              github={true}
              githublink='#'
            />
            <CardItem
              src='img/tetris.gif'
              title="Tetris Game"
              text='Tetris game created using Javascript. Try it out!'
              label='Javascript'
              github={true}
              githublink='#'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img/Sudoku.gif'
              title='Sudoku Backtracking Algorithm'
              text='Created a visualization of a Sudoku Backtracking algorithm'
              label='Python, Pygame'
              github={true}
              githublink='#'
            />
            <CardItem
              src=''
              title="Lucian Tranc Personal Website"
              text='I developed the website you are currently exploring'
              label='React.js, Javascript/HTML'
              github={true}
              githublink='#'
            />
            <CardItem
              src=''
              title="Rhino Pavement Inc. Website"
              text='Website I created for a friends Seal Coating Company'
              label='Javascript/HTML, Bootstrap'
              github={false}
              buttonlink='#'
              buttonname='Visit Site'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;