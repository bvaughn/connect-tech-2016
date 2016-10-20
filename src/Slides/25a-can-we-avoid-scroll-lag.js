import React from 'react';
import Note from '../Components/Note';
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
      <Step><p><Note>This concern is unique to windowing.</Note></p></Step>
    </Slide>
  </Stepper>
);
