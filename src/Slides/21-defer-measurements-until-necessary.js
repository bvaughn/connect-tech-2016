import React from 'react';
import Note from '../Components/Note';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Defer measurements until necessary</h1>
      <Step>
        <p>
          <strong className='QuestionLabel'>Problem</strong>: Measuring wastes cycles (particularly with <code>CellMeasurer</code>)
        </p>
      </Step>
      <Step>
        <p>
          <strong className='AnswerLabel'>Solution</strong>: Don't estimate size until content is actually displayed)
        </p>
      </Step>
      <br/>
      <Step>
        <Note>
          Mixed exponential &amp; binary search is used for <em>scrollToRow</em>
        </Note>
      </Step>
    </Slide>
  </Stepper>
);
