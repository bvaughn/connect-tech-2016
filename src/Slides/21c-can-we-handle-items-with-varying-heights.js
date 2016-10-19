import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import sourceCellMeasurer from './Examples/dynamic-cell-measurer.js';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Can we handle items with varying heights?</h1>
      <h3>If size must be measured by the browser ...</h3>
      <Step><p><strong className='AnswerLabel'>Solution</strong>: Use a HOC (<code>CellMeasurer</code>)</p></Step>
      <Step exactMatch>
        <CodeMirror
          dimLines={[[0,1], [4,4], [6,7], [10,11]]}
          source={sourceCellMeasurer}
        />
      </Step>
      <Step exactMatch>
        <CodeMirror source={sourceCellMeasurer} />
      </Step>
    </Slide>
  </Stepper>
);
