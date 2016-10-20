import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import source from './Examples/collection.js';

export default () => (
  <Stepper numSteps={3}>
    <Slide>
      <h1>Collection demo</h1>

      <Step index={0} exactMatch>
        <CodeMirror dimLines={[[0,21]]} source={source} />
      </Step>
      <Step index={1} exactMatch>
        <CodeMirror dimLines={[[10,30]]} source={source} />
      </Step>
      <Step index={2} exactMatch>
        <CodeMirror dimLines={[[0,10], [21,30]]} source={source} />
      </Step>
    </Slide>
  </Stepper>
);
