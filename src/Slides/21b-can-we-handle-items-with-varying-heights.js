import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import sourceRowHeightGetter from './Examples/dynamic-row-height-getter.js';

export default () => (
  <Stepper numSteps={3}>
    <Slide>
      <h1>Can we handle items with varying heights?</h1>
      <h3>If size can be inferred from the data ...</h3>
      <Step><p><strong className='AnswerLabel'>Solution</strong>: Use a function property!</p></Step>
      <Step>
        <CodeMirror
          highlightLines={[[0,2], [8,8]]}
          source={sourceRowHeightGetter}
        />
      </Step>
    </Slide>
  </Stepper>
);
