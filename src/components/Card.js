import React from 'react';
import './Card.css';

function Card(props) {

  const titleText = props.titleText;
  const technologiesText = props.technologiesText;
  const descriptionText = props.descriptionText;
  const backgroundImage = props.backgroundImage;
  const videoLink = props.videoLink;

  const buttons = [];

  if (props.buttons) {
    
    console.log(props.buttons);

    for (var i = 0; i < props.buttons.length; i++)
    {
      console.log(props.buttons[i].link);
      console.log(props.buttons[i].title);
      buttons.push(
        <i class="arrow right"></i>
      );
      buttons.push(
        <span>&nbsp;&nbsp;</span>
      );
      buttons.push(
        <a class="card-hover-content-link" href={props.buttons[i].link} key={props.buttons[i].key}>{props.buttons[i].title}</a>
      );

    }
  }

  return (
    <>
      <li className='card-container'>
        <div className='card'  style={{ backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 100%), url(${backgroundImage})` }}>
          <div className='card-default-content'>
            <h2 className='card-title'>
              {titleText}
            </h2>
            <p className='card-technologies-text'>
              {technologiesText}
            </p>
          </div>
          <div className='card-hover-content'>
            <div className='card-hover-content-description-div'>
              <h2 className='card-title'>
                {titleText}
              </h2>
              <p className='card-technologies-text'>
                {technologiesText}
              </p>
              <br/>
              <p className='card-hover-content-description'>
                {descriptionText}
              </p>
              <br/>
              <div className='card-hover-content-buttons'>
                {buttons}
              </div>
            </div>
            <div className='card-hover-content-video-div'>
              <iframe width="100%" height="auto"
                src={videoLink} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
