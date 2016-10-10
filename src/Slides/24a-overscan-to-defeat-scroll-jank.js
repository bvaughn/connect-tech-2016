import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import movie from '../../public/overscan-example.mp4';
import './24-overscan-to-defeat-scroll-jank.css';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Overscan to defeat scroll jank</h1>
      <ul>
        <Step>
          <li>Scrolling animation runs in a separate thread</li>
        </Step>
        <Step>
          <li>JavaScript is periodically updated of new scroll positions</li>
        </Step>
        <Step>
          <li>This can cause empty space to appear near the edges</li>
        </Step>
      </ul>
      <Step>
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
      </Step>
    </Slide>
  </Stepper>
);
