import React from 'react';
import List from '../Components/AnimatedList';
import ExampleList from '../Components/ExampleList';
import Note from '../Components/Note';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Overscan to defeat scroll jank</h1>
      <div className='OverscanListRow'>
        <Step index={0} exactMatch>
          <div>
            <p>The solution?</p>
          </div>
        </Step>
        <Step index={1} exactMatch>
          <div>
            <p>Overscan rows</p>
            <List direction={0} />
          </div>
        </Step>
        <Step index={2} exactMatch>
          <div>
            <p>Shift in the direction being scrolled</p>
            <List direction={1} />
          </div>
        </Step>
        <Step index={3} exactMatch>
          <div>
            <p>Shift in the direction being scrolled</p>
            <List direction={-1} />
          </div>
        </Step>
        <Step index={4} exactMatch>
          <div>
            <p>Limits the overall number of rows and reduces scrolling flicker</p>
            <ExampleList />
            <Note>
              View source to see overscanned rows
            </Note>
          </div>
        </Step>
      </div>
    </Slide>
  </Stepper>
);
