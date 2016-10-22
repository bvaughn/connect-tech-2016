import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={6}>
    <Slide>
      <h1>Why are we here?</h1>
      <Step><p>We're here to talk about performance.</p></Step>
      <ul>
        <Step><li>Huge topic</li></Step>
        <Step><li>Can't possibly cover it all</li></Step>
        <Step><li>Focus on things that slow React applications down</li></Step>
        <Step><li>Talk about ways to fix them</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
