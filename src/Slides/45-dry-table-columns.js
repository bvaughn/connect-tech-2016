import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import source from './Examples/dry-table-column.js';

export default () => (
  <Stepper numSteps={2}>
    <Slide>
      <h1>D.R.Y. table columns</h1>
      <p>
        If your application has a lot of <code>Table</code>s, consider DRYing up your <code>Column</code>s.
      </p>
      <Step>
        <CodeMirror source={source} />
      </Step>
    </Slide>
  </Stepper>
);
