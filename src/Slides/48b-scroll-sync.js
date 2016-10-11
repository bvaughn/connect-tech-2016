import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import source from './Examples/scroll-sync.js';

export default () => (
  <Slide>
    <h1>Sticky rows &amp; columns with <code>ScrollSync</code></h1>

    <CodeMirror source={source} />
  </Slide>
);
