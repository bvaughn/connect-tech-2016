import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Sources of slowness in React apps</h1>

      <Step index={1}>
        <div>
          <h2>Browser</h2>
          <ul>
            <Step index={2}><li>Creating lots of DOM elements</li></Step>
            <Step index={3}><li>Repaints / reflows</li></Step>
            <Step index={4}><li>Garbage collection</li></Step>
          </ul>
        </div>
      </Step>
    </Slide>
  </Stepper>
);
