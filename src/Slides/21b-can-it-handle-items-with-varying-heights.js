import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import sourceRowHeightGetter from './Examples/dynamic-row-height-getter.js';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Can it handle items with varying heights?</h1>
      <h2>If size can be inferred from the data ...</h2>
      <Step><p><strong className='AnswerLabel'>Solution</strong>: Use a function property!</p></Step>
      <Step exactMatch>
        <CodeMirror
          dimLines={[[3,7], [9,12]]}
          source={sourceRowHeightGetter}
        />
      </Step>
      <Step exactMatch>
        <CodeMirror source={sourceRowHeightGetter} />
      </Step>
    </Slide>
  </Stepper>
);
