import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';
import sourceP1 from './Examples/scroll-sync-p1.js';
import sourceP2 from './Examples/scroll-sync-p2.js';
import sourceP3 from './Examples/scroll-sync-p3.js';

export default () => (
  <Stepper numSteps={6}>
    <Slide>
      <h1>Sticky rows &amp; columns</h1>

      <Step index={0} exactMatch>
        <CodeMirror source={sourceP1} />
      </Step>

      <Step index={1} exactMatch>
        <CodeMirror
          dimLines={[[0,1], [4,9], [11,16], [18,22], [24,26], [29,30]]}
          source={sourceP1}
        />
      </Step>

      <Step index={2} exactMatch>
        <CodeMirror source={sourceP2} />
      </Step>

      <Step index={3} exactMatch>
        <CodeMirror
          source={sourceP3}
        />
      </Step>

      <Step index={4} exactMatch>
        <CodeMirror
          dimLines={[[0,1], [4,8], [10,11]]}
          source={sourceP3}
        />
      </Step>

      <Step index={5} exactMatch>
        <CodeMirror
          dimLines={[[0,3], [7,7], [9,11]]}
          source={sourceP3}
        />
      </Step>
    </Slide>
  </Stepper>
);
