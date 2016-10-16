import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import ScuChart from '../Components/ScuChart';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Avoid unnecessary renders</h1>
      <Step>
        <div>
          <p>React (re-)renders the entire tree when state changes.</p>
          <ScuChart scu='all' />
        </div>
      </Step>
      <Step><h3>This is important because:</h3></Step>
      <ul>
        <Step><li>Slow for big applications</li></Step>
        <Step><li>Virtual DOM is faster than DOM, but still not free</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
