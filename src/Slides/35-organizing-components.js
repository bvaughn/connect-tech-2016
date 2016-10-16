import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import sourceA from './Examples/table-column.js';
import sourceB from './Examples/dry-table-column.js';

export default () => (
  <Stepper numSteps={3}>
    <Slide>
      <h1>Organizing components</h1>
      <p>
        <strong className='QuestionLabel'>Example</strong>: What if your application has a lot of <code>Table</code>s?
      </p>
      <Step index={1} exactMatch>
        <div>
          <p>This can lead to a lot of redundant code</p>
          <CodeMirror source={sourceA} />
        </div>
      </Step>
      <Step index={2} exactMatch>
        <div>
          <p><strong className='AnswerLabel'>Solution</strong>: Create components/factories to help DRY things up</p>
          <CodeMirror source={sourceB} />
        </div>
      </Step>
    </Slide>
  </Stepper>
);
