import React from 'react';
import './Centered.css';

export default function Centered ({
  children
}) {
  return (
    <div className='Slide CenteredSlide'>
      {children}
    </div>
  );
}
