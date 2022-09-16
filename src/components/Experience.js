import React from 'react';
import './Experience.css';
import FadeInSection from './FadeInSection';
import BannerCard from './BannerCard';

function Experience() {
  return (
    <div className='experience' id='experience'>
      <FadeInSection>
        <div className='experience-header-container'>
          <h1 className='experience-header'>Experience</h1>
        </div>
      </FadeInSection>
      <div className='banner-cards-wrapper'>
        <FadeInSection>
          <BannerCard
            companyText='Electronic Arts'
            jobTitleText='Unity Software Engineer Co-op'
            datesText='May 2022 - Aug 2022'
            logoImage='./img/ea-logo.png'
            descriptionText='Worked on mobile games at the EA Glu studio in Toronto. Developed a multiplayer voting system, an XP bar shader, 
                             and made dynamic UI features for a pre-production prototype. '
            />
        </FadeInSection>
        <FadeInSection>
          <BannerCard
            companyText='Magnet Forensics'
            jobTitleText='Software Developer Co-op'
            datesText='Jan 2022 - April 2022'
            logoImage='./img/magnet-logo-cropped.jpeg'
            descriptionText='Member of the Computer Artifacts team, where I reverse engineered
                             data storage patterns of desktop applications for the retrival of sensitive data. '
          />
        </FadeInSection>
        <FadeInSection>
          <BannerCard
            companyText='McMaster University'
            jobTitleText='Game Developer'
            datesText='Dec 2020 - Aug 2021'
            logoImage='./img/macmaster_logo.jpeg'
            descriptionText='Developed "Hemoworld", an educational mobile game as a part of the DATCH project
                             (Developmentally Appropriate Tools for Children with Hemophilia).'
          />
        </FadeInSection>
        <FadeInSection>
          <BannerCard
            companyText='Communitech'
            jobTitleText='Web Designer'
            datesText='Sep 2020 - Dec 2020'
            logoImage='./img/communitech_logo.jpeg'
            descriptionText='Created WordPress websites as alternatives for brick-and-mortar businesses in response to the COVID-19 pandemic'
          />
        </FadeInSection>
      </div>
    </div>
  );
}

export default Experience;
