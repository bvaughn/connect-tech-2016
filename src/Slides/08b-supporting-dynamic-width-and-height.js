import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import sourceCellMeasurer from './Examples/dynamic-cell-measurer.js';

export default () => (
  <Slide>
    <h1>Supporting dynamic widths and heights</h1>
    <div>
      <p>Use <code>CellMeasurer</code> if you don't know ahead of time:</p>
      <CodeMirror source={sourceCellMeasurer} />
    </div>
  </Slide>
);
