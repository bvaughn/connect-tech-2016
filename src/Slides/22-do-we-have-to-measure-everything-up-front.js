import React from 'react';
import DeferMeasurements from '../Components/DeferMeasurements';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={5}>
    {(index) => (
      <Slide>
        <h1>Do we have to measure everything up front?</h1>
        {index < 2 && (
          <p>
            <strong className='QuestionLabel'>Problem</strong>: Measuring wastes cycles, especially if it requires rendering.
          </p>
        )}
        {index === 1 && (
          <p>
            <strong className='AnswerLabel'>Solution</strong>: Don't measure sizes until content is actually displayed.
          </p>
        )}
        <Step index={2}>
          <p>
            <strong className='QuestionLabel'>Problem</strong>: But how can we know the total height if we don't measure?
          </p>
        </Step>
        <Step index={3}>
          <p>
            <strong className='AnswerLabel'>Solution</strong>: Use estimated sizes initially and gradually adjust.
          </p>
        </Step>
        <div className='Spacer' />
        <Step index={4}>
          <DeferMeasurements />
        </Step>
      </Slide>
    )}
  </Stepper>
);

