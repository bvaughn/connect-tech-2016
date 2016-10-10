import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Note from '../Components/Note';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import sourceCellMeasurer from './Examples/dynamic-cell-measurer.js';

export default () => (
  <Stepper numSteps={3}>
    <Slide>
      <h1>Supporting dynamic widths and heights</h1>
      <div>
        <p><strong className='QuestionLabel'>Question</strong>: Is the size unknown beforehand?</p>
        <Step><p><strong className='AnswerLabel'>Answer</strong>: Use the <code>CellMeasurer</code> component!</p></Step>
        <Step>
          <CodeMirror
            highlightLines={[[6,12]]}
            source={sourceCellMeasurer}
          />
        </Step>
      </div>
      <br/>
      <Step index={2}>
        <Note>
          Note the use of function children
        </Note>
      </Step>
    </Slide>
  </Stepper>
);
