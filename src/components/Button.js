import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export const Button = ({
  children,
  type,
  onClick,
}) => {

  return (
    <Link to='/contact' className='btn-mobile'>
      <button
        className={`btn btn--outline btn--large`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};