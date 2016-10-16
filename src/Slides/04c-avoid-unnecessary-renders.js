import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import source from './Examples/shallow-compare.js';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Avoid unnecessary renders</h1>
      <p>
        <a href='https://facebook.github.io/react/docs/shallow-compare.html'><code>shallowCompare</code></a> util makes this easy.
      </p>
      <ul>
        <Step><li>Compares current vs next <code>props</code> and <code>state</code></li></Step>
        <Step><li>Only re-renders if something has changed</li></Step>
      </ul>
      <Step>
        <CodeMirror
          highlightLines={[[4,6]]}
          source={source}
        />
      </Step>
    </Slide>
  </Stepper>
);
