import React from 'react';
import DeferMeasurements from '../Components/DeferMeasurements';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={6}>
    <Slide>
      <h1>Can we defer measurements?</h1>
      <Step>
        <p>
          <strong className='QuestionLabel'>Problem</strong>: Measuring wastes cycles, especially if it requires rendering.
        </p>
      </Step>
      <Step>
        <p>
          <strong className='AnswerLabel'>Solution</strong>: Don't measure sizes until content is actually displayed.
        </p>
      </Step>
      <div className='Spacer' />
      <Step>
        <p>
          <strong className='QuestionLabel'>Problem</strong>: But how can we know the total height if we don't measure?
        </p>
      </Step>
      <Step>
        <p>
          <strong className='AnswerLabel'>Solution</strong>: Use estimated sizes initially and gradually adjust.
        </p>
      </Step>
      <div className='Spacer' />
      <Step>
        <DeferMeasurements />
      </Step>
    </Slide>
  </Stepper>
);

