import React from 'react';
import List from '../Components/AnimatedList';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={4}>
    {(index) => (
      <Slide>
        <h1>Scrolling challenges for windowed elements</h1>
        <div className='OverscanListRow'>
          {index === 0 && (
            <div>
              <p>The solution: "overscan" rows</p>
              <List direction={0} />
            </div>
          )}
          {index === 1 && (
            <div>
              <p>Shift in the direction being scrolled</p>
              <List direction={1} />
            </div>
          )}
          {index === 2 && (
            <div>
              <p>Shift in the direction being scrolled</p>
              <List direction={-1} />
            </div>
          )}
          {index === 3 && (
            <div>
              <p>Limits the overall number of rows and reduces scrolling "flicker"</p>
              <List direction={0} />
            </div>
          )}
        </div>
      </Slide>
    )}
  </Stepper>
);
