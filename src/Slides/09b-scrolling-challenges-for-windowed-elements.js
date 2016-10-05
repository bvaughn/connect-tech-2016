import React from 'react';
import List from '../Components/AnimatedList';
import ExampleList from '../Components/ExampleList';
import Note from '../Components/Note';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={5}>
    {(index) => (
      <Slide>
        <h1>Scrolling challenges for windowed elements</h1>
        <div className='OverscanListRow'>
          {index === 0 && (
            <div>
              <p>The solution?</p>
            </div>
          )}
          {index === 1 && (
            <div>
              <p>Overscan rows</p>
              <List direction={0} />
            </div>
          )}
          {index === 2 && (
            <div>
              <p>Shift in the direction being scrolled</p>
              <List direction={1} />
            </div>
          )}
          {index === 3 && (
            <div>
              <p>Shift in the direction being scrolled</p>
              <List direction={-1} />
            </div>
          )}
          {index === 4 && (
            <div>
              <p>Limits the overall number of rows and reduces scrolling flicker</p>
              <ExampleList />
              <Note>
                View source to see overscanned rows
              </Note>
            </div>
          )}
        </div>
      </Slide>
    )}
  </Stepper>
);
