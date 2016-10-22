import React from 'react';
import List from '../Components/AnimatedList';
import ExampleList from '../Components/ExampleList';
import Note from '../Components/Note';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>What about scroll lag?</h1>
      <div className='OverscanListRow'>
        <Step index={0} exactMatch>
          <div>
            <p><strong className='AnswerLabel'>Solution</strong>: Use "overscanning"</p> 
            <List direction={0} />
          </div>
        </Step>
        <Step exactMatch>
          <div>
            <p>Shift in the direction being scrolled (scrolling down)</p>
            <List direction={1} />
          </div>
        </Step>
        <Step exactMatch>
          <div>
            <p>Shift in the direction being scrolled (scrolling up)</p>
            <List direction={-1} />
          </div>
        </Step>
        <Step exactMatch>
          <div>
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
