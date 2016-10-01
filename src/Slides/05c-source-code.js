import React from 'react';
import CodeMirror from './Components/CodeMirror';
import Slide from './Components/Slide';
import Stepper from './Components/Stepper';
import sourceNonVirtualized from './Examples/perf-comparison-non-virtualized.js';
import sourceVirtualized from './Examples/perf-comparison-virtualized.js';
import './05-shared.css';

export default () => (
  <Stepper numSteps={2}>
    {(index) => (
      <Slide>
        <h1>How does windowing impact performance?</h1>
        {index === 0 && (
          <div>
            <h3>Vanilla React (no windowing)</h3>
            <CodeMirror source={sourceNonVirtualized} />
          </div>
        )}
        {index === 1 && (
          <div>
            <h3>react-virtualized <code>List</code></h3>
            <CodeMirror source={sourceVirtualized} />
          </div>
        )}
      </Slide>
    )}
  </Stepper>
);
