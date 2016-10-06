import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Note from '../Components/Note';
import Slide from '../Components/Slide';
import sourceCellMeasurer from './Examples/dynamic-cell-measurer.js';

export default () => (
  <Slide>
    <h1>Supporting dynamic widths and heights</h1>
    <div>
      <p><strong>Q</strong>: Is the size unknown beforehand?</p>
      <p><strong>A</strong>: Use the <code>CellMeasurer</code> component!</p>
      <CodeMirror
        highlightLines={[[6,12]]}
        source={sourceCellMeasurer}
      />
    </div>
    <br/>
    <Note>
      Note the use of function children
    </Note>
  </Slide>
);
