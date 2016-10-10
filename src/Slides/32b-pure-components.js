import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import source from './Examples/pass-thru-props.js';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Pure components</h1>
      <p>The solution?</p>
      <ul>
      <Step index={1}><li>Clear cached sizes (with <code>recomputeGridSize</code> / <code>recomputeRowHeights</code>.)</li></Step>
      <Step index={2}>
        <li>
          Let react-virtualized know that something external has changed:
          <ul>
            <Step index={3}><li>Rerender via public API methods (eg <code>forceUpdate</code> and <code>forceUpdateGrid</code>) or...</li></Step>
            <Step index={4}><li>Use pass-thru properties:</li></Step>
          </ul>
        </li>
      </Step>
      </ul>
      <Step index={4}>
        <CodeMirror source={source} />
      </Step>
    </Slide>
  </Stepper>
);
