import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <p className='website-rights'>Lucian Tranc 2023</p>
          <div className='social-icons'>
            <a href='mailto: ltranc@uoguelph.ca' target="_blank" rel="noreferrer" className='social-icon-link'><i className='fas fa-envelope'/></a>
            <a href='https://github.com/LucianTranc' target="_blank" rel="noreferrer" className='social-icon-link'><i className='fab fa-github'/></a>
            <a href='https://linkedin.com/in/luciantranc' target="_blank" rel="noreferrer" className='social-icon-link'><i className='fab fa-linkedin'/></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
