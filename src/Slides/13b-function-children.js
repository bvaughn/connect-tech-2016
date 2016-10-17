import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import source from './Examples/function-children-example.js';

export default () => (
  <Stepper numSteps={3}>
    <Slide>
      <h1>Function children <small>(aka render callbacks)</small></h1>
      <Step index={0} exactMatch>
        <CodeMirror
          dimLines={[[4,22]]}
          source={source}
        />
      </Step>
      <Step index={1} exactMatch>
        <CodeMirror
          dimLines={[[8,22]]}
          source={source}
        />
      </Step>
      <Step index={2} exactMatch>
        <CodeMirror source={source} />
      </Step>
    </Slide>
  </Stepper>
);
