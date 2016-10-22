import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import './25-what-about-scroll-lag.css';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>What about scroll lag?</h1>
      <p>Why does windowing cause this?</p>
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
      <Step><p>So what can we do about it?</p></Step>
    </Slide>
  </Stepper>
);
