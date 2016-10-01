import React from 'react';
import './Note.css';

export default function Note ({
  children
}) {
  return (
    <div className='Note'>
      <i className='fa fa-info-circle' /> {children}
    </div>
  );
}
