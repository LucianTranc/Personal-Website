import React from 'react';

function CardItem(props) {

  const storeLinks = props.storeLinks;
  const github = props.github;
  const githublink = props.githublink;
  const secondbutton = props.secondbutton;
  const buttonlink = props.buttonlink;
  const buttonname = props.buttonname;
  const label = props.label;
  const src = props.src;
  const title = props.title;
  const text = props.text;

  var buttons;

  if (storeLinks)
  {
    buttons = <div className="cards-item-buttons">
                <a href='https://apps.apple.com/ca/app/hover-rocket-adventure/id1532670959' target="_blank" rel="noreferrer" className='card-icon'><i className='fab fa-app-store fa-3x'/></a>
                <a href={githublink} target="_blank" rel="noreferrer" className='card-button'>Github</a>
                <a href='https://play.google.com/store/apps/details?id=com.Loogames.HoverRocket' target="_blank" rel="noreferrer" className='card-icon'><i className='fab fa-google-play fa-3x'/></a>
              </div>
  }
  else if (github && secondbutton)
  {
    buttons = <div className="cards-item-buttons">
                <a href={githublink} target="_blank" rel="noreferrer" className='card-button'>Github</a>
                <a href={buttonlink} target="_blank" rel="noreferrer" className='card-button'>{buttonname}</a>
              </div>
  }
  else if (github)
  {
    buttons = <div className="cards-item-buttons">
                <a href={githublink} target="_blank" rel="noreferrer" className='card-button'>Github</a>
              </div>
  }
  else
  {
    buttons = <div className="cards-item-buttons">
                <a href={buttonlink} target="_blank" rel="noreferrer" className='card-button'>{buttonname}</a>
              </div>
  }

  return (
    <>
      <li className='cards-item'>
        <div className='cards-item-link'>
          <figure className='cards-item-pic-wrap' data-category={label}>
            <img
              className='cards-item-img'
              alt='Project Showcase'
              src={src}
            />
          </figure>
          <div className='cards-item-info'>
            <h1 className="card-item-header">{title}</h1>
            <br/>
            <h1 className='card-item-text'>{text}</h1>
            {buttons}
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
