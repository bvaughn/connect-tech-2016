import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import movie from '../../public/overscan-example.mp4';
import './25-avoid-scroll-jank.css';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Can we avoid scroll lag?</h1>
      <Step><h2>What the heck do I mean?</h2></Step>
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
      <Step><h2>This concern is unique to windowing.</h2></Step>
    </Slide>
  </Stepper>
);
