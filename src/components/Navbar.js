import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleClickAbout = () => {
    props.aboutRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleClickProjects = () => {
    props.projectsRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleClickExperience = () => {
    props.experienceRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Lucian Tranc
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <button className='nav-links' onClick={handleClickAbout}>About</button>
            </li>
            <li className='nav-item'>
              <button className='nav-links' onClick={handleClickProjects}>Projects</button>
            </li>
            <li className='nav-item'>
              <button className='nav-links' onClick={handleClickExperience}>Experience</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;