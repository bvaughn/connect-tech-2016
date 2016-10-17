import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';
import sourceP1 from './Examples/scroll-sync-p1.js';
import sourceP2 from './Examples/scroll-sync-p2.js';
import sourceP3 from './Examples/scroll-sync-p3.js';

export default () => (
  <Stepper numSteps={3}>
    <Slide>
      <h1>Sticky rows &amp; columns</h1>

      <Step index={0} exactMatch>
        <CodeMirror
          highlightLines={[[3,3], [10,10], [17,17], [23,23]]}
          source={sourceP1}
        />
      </Step>

      <Step index={1} exactMatch>
        <CodeMirror source={sourceP2} />
      </Step>

      <Step index={2} exactMatch>
        <CodeMirror
          highlightLines={[[5,5], [8,8]]}
          source={sourceP3}
        />
      </Step>
    </Slide>
  </Stepper>
);
