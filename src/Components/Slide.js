import React from 'react';
import './Slide.css';

export default function Slide ({
  children
}) {
  return (
    <div className='Slides__Slide'>
      {children}
    </div>
  );
}
