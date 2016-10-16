import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Can we scroll to a row with props?</h1>
      <p>
        The basic approach:
      </p>
      <ul>
        <Step><li>J.I.T. measure rows before the specified index</li></Step>
        <Step><li>Don't measure any rows after the index</li></Step>
        <Step><li>Keep running total of measured sizes (cache)</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
