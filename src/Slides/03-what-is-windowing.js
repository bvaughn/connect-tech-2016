import React from 'react';
import List from '../Components/AnimatedList';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={3}>
    {(index) => (
      <Slide>
        <h1>What is windowing?</h1>
        <Step>
          <p><strong>A</strong>: Only rendering enough elements to fill the viewport.</p>
        </Step>
        <Step>
          <List
            direction={0}
            overscanCount={0}
          />
        </Step>
      </Slide>
    )}
  </Stepper>
);
