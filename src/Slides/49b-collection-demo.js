import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import source from './Examples/collection.js';

export default () => (
  <Slide>
    <h1>Collection demo</h1>

    <CodeMirror source={source} />
  </Slide>
);
