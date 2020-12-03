import React from 'react';

function CardItem(props) {

  const storeLinks = props.storeLinks;
  const github = props.github;
  const githublink = props.githublink;
  const secondbutton = props.secondbutton;



  if (storeLinks) {
    return (
      <>
        <li className='cards__item'>
          <div className='cards__item__link'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                alt='Project Showcase'
                src={props.src}
                
              />
            </figure>
            <div className='cards__item__info'>
              <h1 className="cards__item__text">{props.title}</h1><br/>
              <h5 className='cards__item__text'>{props.text}</h5>
              <div className="cards__item__buttons">
                <a href='https://apps.apple.com/ca/app/hover-rocket-adventure/id1532670959' target="_blank" rel="noreferrer" className='card__icon'><i className='fab fa-app-store fa-3x'/></a>
                <a href={githublink} target="_blank" rel="noreferrer" className='card__button'>Github</a>
                <a href='https://play.google.com/store/apps/details?id=com.Loogames.HoverRocket' target="_blank" rel="noreferrer" className='card__icon'><i className='fab fa-google-play fa-3x'/></a>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  }

  if (github && secondbutton) {
    return (
      <>
        <li className='cards__item'>
          <div className='cards__item__link'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                alt='Project Showcase'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <div className="cards__item__text__continer">
                <h1 className="cards__item__text">{props.title}</h1><br/>
                <h5 className='cards__item__text'>{props.text}</h5>
              </div>
              <div className="cards__item__buttons">
                <a href={githublink} target="_blank" rel="noreferrer" className='card__button'>Github</a>
                <a href={props.buttonlink} target="_blank" rel="noreferrer" className='card__button'>{props.buttonname}</a>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  }

  if (github) {
    return (
      <>
        <li className='cards__item'>
          <div className='cards__item__link'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                alt='Project Showcase'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <div className="cards__item__text__continer">
                <h1 className="cards__item__text">{props.title}</h1><br/>
                <h5 className='cards__item__text'>{props.text}</h5>
              </div>
              <div className="cards__item__buttons">
                <a href={githublink} target="_blank" rel="noreferrer" className='card__button'>Github</a>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  }

  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Project Showcase'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h1 className="cards__item__text">{props.title}</h1><br/>
            <h5 className='cards__item__text'>{props.text}</h5>
            <div className="cards__item__buttons">
              <a href={props.buttonlink} target="_blank" rel="noreferrer" className='card__button'>{props.buttonname}</a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
