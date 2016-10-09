import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import './21-defer-measurements-until-necessary.css';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Defer measurements until necessary</h1>
      <Step>
        <p>
          <strong className='ProblemLabel'>Problem</strong>: Measuring wastes cycles (particularly with <code>CellMeasurer</code>)
        </p>
      </Step>
      <Step>
        <p>
          <strong className='SolutionLabel'>Solution</strong>: Don't estimate size until content is actually displayed)
        </p>
      </Step>
      <br/>
      <Step>
        <p>
          <strong className='ProblemLabel'>Problem</strong>: Scroll-to-cell prop can cause a lot of measuring
        </p>
      </Step>
      <Step>
        <p>
          <strong className='SolutionLabel'>Solution</strong>: Use mixed exponential and binary search to limit
        </p>
      </Step>
    </Slide>
  </Stepper>
);
