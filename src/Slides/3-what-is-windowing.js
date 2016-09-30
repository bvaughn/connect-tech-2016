import React from 'react';
import List from './Components/AnimatedList';
import Slide from './Components/Slide';
import Stepper from './Components/Stepper';

export default () => (
  <Stepper numSteps={2}>
    {(index) => (
      <Slide>
        <h1>What is windowing?</h1>
        {index >= 1 && (
          <div>
            <h3>Only rendering enough elements to fill the viewport.</h3>
            <List
              direction={0}
              overscanCount={0}
            />
          </div>
        )}
      </Slide>
    )}
  </Stepper>
);
