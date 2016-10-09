import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Why is windowing important?</h1>
      <ul>
        <Step><li>Creating DOM elements (or executing <code>render</code> logic) takes time</li></Step>
        <Step><li>Unnecessary layout and painting wastes battery</li></Step>
        <Step><li>Bad framerate makes your application feel poorly written</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
