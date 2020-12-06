import React from 'react';
import '../App.css';
import './ExperienceContent.css';

function ExperienceContent() {
  return (
    <div className="experience-content-container">
      <div className='job-section'>
        <div className="job-info">
          <div className="company-logo-wrapper">
            <img src="/img/communitech_logo.jpg" alt="Communitech logo" className="company-logo-img"></img>
          </div>
          <div className="job-info-text-wrapper">
            <h1 className="job-title">Web Designer</h1>
            <h2 className="company-title">Communitech</h2>
          </div>
        </div>
        <div className="job-description">
          <h2>About Communitech</h2>
          <p> 
            Irure velit consequat ea occaecat anim tempor laborum sit.
            Nostrud anim et reprehenderit ad. Ullamco labore consequat ea duis nulla dolor magna proident Lorem ut eiusmod mollit magna.
          </p>
          <h2>Job Description</h2>
          <p> 
            <ul className="point-form">
              <li>
                Irure velit consequat ea occaecat anim tempor laborum sit.
                Nostrud anim et reprehenderit ad. Ullamco labore consequat ea duis nulla dolor magna proident Lorem ut eiusmod mollit magna.
              </li>
              <li>
                Excepteur culpa quis ad mollit sit sint consectetur nulla officia cillum pariatur excepteur sit incididunt.
              </li>
              <li>
                Voluptate cillum dolor amet sint. Quis ullamco quis amet magna aliqua veniam nisi nisi reprehenderit pariatur aute adipisicing aliquip.
                Et labore amet exercitation ex veniam.
              </li>
            </ul>
          </p>
          <h2>Learning Goals</h2>
          <p> 
          <ul className="point-form">
              <li>
                Irure velit consequat ea occaecat anim tempor laborum sit.
                Nostrud anim et reprehenderit ad. Ullamco labore consequat ea duis nulla dolor magna proident Lorem ut eiusmod mollit magna.
              </li>
              <li>
                Excepteur culpa quis ad mollit sit sint consectetur nulla officia cillum pariatur excepteur sit incididunt.
              </li>
              <li>
                Voluptate cillum dolor amet sint. Quis ullamco quis amet magna aliqua veniam nisi nisi reprehenderit pariatur aute adipisicing aliquip.
                Et labore amet exercitation ex veniam.
              </li>
            </ul>
          </p>
          <h2>Reflection</h2>
          <p> 
            Irure velit consequat ea occaecat anim tempor laborum sit.
            Nostrud anim et reprehenderit ad. Ullamco labore consequat ea duis nulla dolor magna proident Lorem ut eiusmod mollit magna.
            Excepteur culpa quis ad mollit sit sint consectetur nulla officia cillum pariatur excepteur sit incididunt.
            Voluptate cillum dolor amet sint. Quis ullamco quis amet magna aliqua veniam nisi nisi reprehenderit pariatur aute adipisicing aliquip.
            Et labore amet exercitation ex veniam.
          </p>
          
        </div>
      </div>
    </div>
  );
}
export default ExperienceContent;
