import React from 'react';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import movie from '../../public/overscan-example.mp4';
import './10-better-scrolling-with-overscan.css';

export default () => (
  <Stepper numSteps={5}>
    {(index) => (
      <Slide>
        <h1>Scrolling challenges for windowed elements</h1>
        <ul>
          {index >= 1 && (
            <li>Scrolling animation runs in a separate thread</li>
          )}
          {index >= 2 && (
            <li>JavaScript is periodically updated of new scroll positions</li>
          )}
          {index >= 3 && (
            <li>This can cause empty space to appear near the edges</li>
          )}
          {index >= 4 && (
            <li>Example video:</li>
          )}
        </ul>
        {index >= 4 && (
          <video
            autoPlay
            className='Movie'
            height={293}
            loop
            width={220}
          >
            <source
              src={movie}
              type='video/mp4'
            />
          </video>
        )}
      </Slide>
    )}
  </Stepper>
);
