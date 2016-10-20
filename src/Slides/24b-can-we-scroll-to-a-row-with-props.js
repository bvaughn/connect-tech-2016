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
        <strong className='AnswerLabel'>Solution</strong>: The basic approach:
      </p>
      <ul>
        <Step index={1}>
          <li>
            J.I.T. measure rows before the specified index
            <Step index={2}><ul><li>No need to measure rows that come after</li></ul></Step>
          </li>
        </Step>
        <Step index={3}><li>Keep running total of measured sizes (in cache)</li></Step>
      </ul>
      <Step index={4}>
        <DeferMeasurements />
      </Step>
    </Slide>
  </Stepper>
);
