import React from 'react';
import './Centered.css';

export default function Centered ({
  children
}) {
  return (
    <div className='Slides__Centered'>
      {children}
    </div>
  );
}
