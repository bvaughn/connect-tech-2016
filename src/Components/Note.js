import classnames from 'classnames';
import React from 'react';
import './Note.css';

export default function Note ({
  children,
  type = 'default'
}) {
  return (
    <div
      className={classnames('Note', {
        NoteWarning: type === 'warning'
      })}
    >
      {type === 'default' && (
        <i className='fa fa-info-circle' />
      )}
      {type === 'warning' && (
        <i className='fa fa-exclamation-triangle' />
      )}

      {children}
    </div>
  );
}
