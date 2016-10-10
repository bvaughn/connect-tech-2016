import React from 'react';
import Note from '../Components/Note';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Defer measurements until necessary</h1>
      <Step>
        <p>
          <strong className='QuestionLabel'>Problem</strong>: Measuring wastes cycles.
        </p>
      </Step>
      <Step>
        <p>
          <strong className='AnswerLabel'>Solution</strong>: Don't measure sizes until content is actually displayed.
        </p>
      </Step>
      <Step>
        <p>
          <strong className='AnswerLabel'>Solution</strong>: Use estimated sizes initially and gradually adjust.
        </p>
      </Step>
      <Step>
        <Note>
          Mixed exponential &amp; binary search is used for scroll-to-index props
        </Note>
      </Step>
    </Slide>
  </Stepper>
);
