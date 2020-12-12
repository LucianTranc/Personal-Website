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
            <p>August 2020 - December 2020</p>
          </div>
        </div>
        <div className="job-description-experience">
          <h2>Job Description</h2>
          <p> 
            I worked as a Web Designer in the Transformation Teams stream of Digital Main Street's Future Proof program. You can read more about Digital Main Street and the 
            Future Proof program on Digital Main Street's <a href='https://digitalmainstreet.ca/futureproof/'>website</a>.
            The transformation teams were assigned businesses in 4-week sprints with the goal of identifing and fixing problems with the businesses
            online presence, mostly their website or social media. My task was more focused on improving the client's website.
          </p>
          <h2>Responsibilites</h2>
          <ul className="point-form">
            <li>
              Meet with clients to discuss their needs and issue they have with their website
            </li>
            <li>
              Create and test web applications and write website code
            </li>
            <li>
              Work with the UX/UI Designer to create website layouts and designs
            </li>
            <li>
              Work with CMS's like Shopify and Wordpress
            </li>
            <li>
              Fix bugs and other issues with client websites or hosting providers
            </li>
            <li>
              Collaborate with Copy Writers and Graphic Designers on website content
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ExperienceContent;
