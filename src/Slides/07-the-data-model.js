import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import source from './Examples/row-renderer.js';

export default () => (
  <Stepper numSteps={3}>
    {(index) => (
      <Slide>
        <h1>The data model</h1>
        <p>At its core react-virtualized only requires 2 things:</p>
        {index >= 1 && (
          <ul>
            <li>Row count / column count (eg <code>array.length</code>, Immutable <code>collection.size</code>)</li>
            {index >= 2 && (
              <li>An item renderer</li>
            )}
          </ul>
        )}
        {index >= 2 && (
          <CodeMirror source={source} />
        )}
      </Slide>
    )}
  </Stepper>
);
