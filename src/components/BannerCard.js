import React from 'react';
import './BannerCard.css';

function BannerCard(props) {

  const companyText = props.companyText;
  const jobTitleText = props.jobTitleText;
  const datesText = props.datesText;
  const descriptionText = props.descriptionText;
  const logoImage = props.logoImage;

  return (
    <>
      <li className='banner-card-container'>
        <div className='banner-card'>
          <div className='banner-card-default-content'>
            <img className='banner-card-default-content-image' src={logoImage} alt=''></img>
            <div className='banner-card-default-content-text'>
              <h2 className='banner-card-company-text'>
                {companyText}
              </h2>
              <p className='banner-card-job-title-text'>
                {jobTitleText}
              </p>
              <p className='banner-card-dates-text'>
                {datesText}
              </p>
              <br/>
              <p className='banner-card-description-text'>
                {descriptionText}
              </p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default BannerCard;
