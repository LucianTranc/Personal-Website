import React from 'react';
import '../App.css';
import './ContactContent.css';

function ContactContent() {
  return (
    <div className="contact-content-container">
      <p> 
        If you would like to find out more about my projects or if you're interested in my work, please reach out.
        You can contact me through my email or through LinkedIn.
      </p>
      <div className='contact-icons-wrapper'>
        <a href='mailto: ltranc@uoguelph.ca' target="_blank" rel="noreferrer"><i className='fas fa-envelope fa-2x'/></a>
        <a href='https://linkedin.com/in/luciantranc' target="_blank" rel="noreferrer"><i className='fab fa-linkedin fa-2x'/></a>
      </div>
    </div>
  );
}

export default ContactContent;
