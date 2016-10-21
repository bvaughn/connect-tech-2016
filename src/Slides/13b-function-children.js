import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import sourceA from './Examples/function-children-example-1.js';
import sourceB from './Examples/function-children-example-2.js';
import sourceC from './Examples/function-children-example-3.js';

export default () => (
  <Stepper numSteps={6}>
    <Slide>
      <h1>Function children <small>(aka render callbacks)</small></h1>
      <Step index={0} exactMatch>
        <CodeMirror source={sourceA}
        />
      </Step>
      <Step index={1} exactMatch>
        <CodeMirror source={sourceB}
        />
      </Step>
      <Step index={2} exactMatch>
        <CodeMirror source={sourceC} />
      </Step>
      <Step index={3} exactMatch>
        <CodeMirror
          dimLines={[[0,1], [4,10], [13,14]]}
          source={sourceC}
        />
      </Step>
      <Step index={4} exactMatch>
        <CodeMirror
          dimLines={[[0,3], [6,8], [11,14]]}
          source={sourceC}
        />
      </Step>
      <Step index={5} exactMatch>
        <CodeMirror
          dimLines={[[0,5], [9,14]]}
          source={sourceC}
        />
      </Step>
    </Slide>
  </Stepper>
);
