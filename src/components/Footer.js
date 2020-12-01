import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Lucian Tranc © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Email'
            >
              <i class='fas fa-envelope' />
            </Link>
            <Link
              class='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
