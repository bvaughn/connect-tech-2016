import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import sourceRowHeightGetter from './Examples/dynamic-row-height-getter.js';

export default () => (
  <Stepper numSteps={3}>
    <Slide>
      <h1>Supporting dynamic widths and heights</h1>
      <div>
        <p><strong className='QuestionLabel'>Question</strong>: Is the size based on the type of data?</p>
        <Step><p><strong className='AnswerLabel'>Answer</strong>: Use a callback!</p></Step>
        <Step><CodeMirror source={sourceRowHeightGetter} /></Step>
      </div>
    </Slide>
  </Stepper>
);
