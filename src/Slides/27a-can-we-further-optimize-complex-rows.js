import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={3}>
    <Slide>
      <h1>Can we further optimize complex rows?</h1>
      <p><strong className='QuestionLabel'>Question</strong>: What if a row contains a lot of content?</p>
      <ul>
        <Step><li>Complex <code>&lt;canvas&gt;</code> or <code>&lt;svg&gt;</code> (heavy layout)</li></Step>
        <Step><li>Images (trigger network requests)</li></Step>
      </ul>
    </Slide>
  </Stepper>
);