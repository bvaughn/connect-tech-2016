import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';
import sourceNonVirtualized from './Examples/perf-comparison-non-virtualized.js';
import sourceVirtualized from './Examples/perf-comparison-virtualized.js';

export default () => (
  <Stepper numSteps={2}>
    <Slide>
      <h1>How does the syntax compare?</h1>
      <Step index={0} exactMatch>
        <div>
          <h3>Vanilla React (no windowing)</h3>
          <CodeMirror source={sourceNonVirtualized} />
        </div>
      </Step>
      <Step index={1} exactMatch>
        <div>
          <h3>react-virtualized <code>List</code></h3>
          <CodeMirror source={sourceVirtualized} />
        </div>
      </Step>
    </Slide>
  </Stepper>
);
