import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import './25-avoid-scroll-jank.css';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Can we avoid scroll lag?</h1>
      <h2>Why does windowing cause this?</h2>
      <ul>
        <Step>
          <li>Browsers manage scrolling in a separate thread</li>
        </Step>
        <Step>
          <li>JavaScript is periodically updated of new scroll positions</li>
        </Step>
        <Step>
          <li>Sometimes JS doesn't respond fast enough (eg 16ms frame budget)</li>
        </Step>
      </ul>
      <Step><h2>So what can we do about it?</h2></Step>
    </Slide>
  </Stepper>
);
