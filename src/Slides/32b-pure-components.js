import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import source from './Examples/pass-thru-props.js';

export default () => (
  <Stepper numSteps={5}>
    {(index) => (
      <Slide>
        <h1>Pure components</h1>
        {index === 0 && (
          <p>The solution?</p>
        )}
        <Step><p>Let react-virtualized know that something external has changed.</p></Step>
        <ul>
          <Step><li>Reset stale sizes with <code>recomputeGridSize</code> / <code>recomputeRowHeights</code></li></Step>
          <Step><li>Rerender via public API methods (eg <code>forceUpdate</code> and <code>forceUpdateGrid</code>)</li></Step>
          <Step><li>Or pass-thru properties:</li></Step>
        </ul>
        {index >= 4 && (
          <CodeMirror source={source} />
        )}
      </Slide>
    )}
  </Stepper>
);
