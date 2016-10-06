import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import source from './Examples/function-children-example.js';

export default () => (
  <Slide>
    <h1>Function children <small>(aka render callbacks)</small></h1>
    <CodeMirror source={source} />
  </Slide>
);
