import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Defer measurements until necessary</h1>
      <Step>
        <p><strong>Problem</strong> Measuring wastes cycles (particularly with <code>CellMeasurer</code>)</p>
      </Step>
      <Step>
        <p><strong>Solution</strong> Estimate size until content is actually displayed)</p>
      </Step>
      <br/>
      <Step>
        <p><strong>Problem</strong> Scroll-to-cell prop can cause a lot of measuring</p>
      </Step>
      <Step>
        <p><strong>Solution</strong> Use mixed exponential and binary search to limit</p>
      </Step>
    </Slide>
  </Stepper>
);
