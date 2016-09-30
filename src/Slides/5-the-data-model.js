import React from 'react';
import CodeMirror from './Components/CodeMirror';
import Slide from './Components/Slide';
import source from './Examples/row-renderer.js';

console.log(`source:${source}:source`)

// @TODO Sequence
export default () => (
  <Slide>
    <h1>The data model</h1>
    <p>At its core react-virtualized only requires 2 things:</p>
    <ul>
      <li>Row count / column count (eg <code>array.length</code>, <code>list.size</code>)</li>
      <li>An item renderer</li>
    </ul>
    <CodeMirror source={source} />
  </Slide>
);
