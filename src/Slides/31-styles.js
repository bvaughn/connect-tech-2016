import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Note from '../Components/Note';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import source from './Examples/forgotten-styles.js';

export default () => (
  <Stepper numSteps={2}>
    <Slide>
      <h1>Styles</h1>
      <p>Most common mistake: forgot to set the <code>style</code>.</p>
      <Step>
        <CodeMirror
          highlightLines={[[3,3], [12,15]]}
          source={source}
        />
      </Step>
    </Slide>
  </Stepper>
);
