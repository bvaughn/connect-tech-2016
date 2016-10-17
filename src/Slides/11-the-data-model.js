import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Note from '../Components/Note';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';
import source from './Examples/row-renderer.js';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>The data model</h1>
      <p>At its core react-virtualized only requires 2 things:</p>
      <Step index={1}>
        <ul>
          <li>Item count (eg <code>array.length</code>, Immutable <code>collection.size</code>)</li>
          <Step index={2}>
            <li>An item renderer</li>
          </Step>
        </ul>
      </Step>
      <Step index={2}>
        <CodeMirror source={source} />
      </Step>
      <Step index={3}>
        <p><Note>You can return any DOM element</Note></p>
      </Step>
      <Step index={4}>
        <p><Note>You can modify or override the style</Note></p>
      </Step>
    </Slide>
  </Stepper>
);
