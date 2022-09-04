import React from 'react';
import './CardItem.css';

function CardItem(props) {

  const titleText = props.titleText;
  const technologiesText = props.technologiesText;
  const descriptionText = props.descriptionText;
  const backgroundImage = props.backgroundImage;

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
        <a class="cards-item-hover-content-link" href={props.buttons[i].link} key={props.buttons[i].key}>{props.buttons[i].title}</a>
      );

    }
  }

  return (
    <>
      <li className='cards-item-container'>
        <div className='cards-item'  style={{ backgroundImage:`url(${backgroundImage})` }}>
          <div className='cards-item-default-content'>
            <h2 className='cards-item-title'>
              {titleText}
            </h2>
            <p className='cards-item-technologies-text'>
              {technologiesText}
            </p>
          </div>
          <div className='cards-item-hover-content'>
            <div className='cards-item-hover-content-description-div'>
              <h2 className='cards-item-title'>
                {titleText}
              </h2>
              <p className='cards-item-technologies-text'>
                {technologiesText}
              </p>
              <br/>
              <p className='cards-item-hover-content-description'>
                {descriptionText}
              </p>
              <br/>
              <div className='cards-item-hover-content-buttons'>
                {buttons}
              </div>
            </div>
            <div className='cards-item-hover-content-video-div'>
              <iframe width="100%" height="auto"
                src="https://www.youtube.com/embed/SN1hIYnKvBE" 
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

export default CardItem;
