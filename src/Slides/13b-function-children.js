import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import sourceA from './Examples/function-children-example-a.js';
import sourceB from './Examples/function-children-example-b.js';
import sourceC from './Examples/function-children-example-c.js';


export default () => (
  <Stepper numSteps={3}>
    <Slide>
      <h1>Function children <small>(aka render callbacks)</small></h1>
      <Step index={0} exactMatch>
        <CodeMirror source={sourceA} />
      </Step>
      <Step index={1} exactMatch>
        <CodeMirror source={sourceB} />
      </Step>
      <Step index={2} exactMatch>
        <CodeMirror source={sourceC} />
      </Step>
    </Slide>
  </Stepper>
);
