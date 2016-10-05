import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import sourceRowHeightGetter from './Examples/dynamic-row-height-getter.js';

export default () => (
  <Slide>
    <h1>Supporting dynamic widths and heights</h1>
    <div>
      <p><strong>Q</strong>: Is the size is based on the type of data?</p>
      <p><strong>A</strong>: Use a callback!</p>
      <CodeMirror source={sourceRowHeightGetter} />
    </div>
  </Slide>
);
