import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import source from './Examples/is-scrolling-cell-renderer.js';

export default () => (
  <Stepper numSteps={2}>
    <Slide>
      <h1>What about elements that are really complex?</h1>
      <p><strong className='AnswerLabel'>Solution</strong>: Render less while scrolling.</p>
      <Step>
        <CodeMirror source={source} />
      </Step>
    </Slide>
  </Stepper>
);