import React from 'react';
import DeferMeasurements from '../Components/DeferMeasurements';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Can we scroll to a row with props?</h1>
      <p>
        The basic approach:
      </p>
      <ul>
        <Step><li>J.I.T. measure rows before the specified index</li></Step>
        <Step><li>(No need to measure rows that come after)</li></Step>
        <Step><li>Keep running total of measured sizes (in cache)</li></Step>
      </ul>
      <Step>
        <DeferMeasurements />
      </Step>
    </Slide>
  </Stepper>
);
