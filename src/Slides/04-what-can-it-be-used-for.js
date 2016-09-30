import React from 'react';
import Slide from './Components/Slide';
import Stepper from './Components/Stepper';

export default () => (
  <Stepper numSteps={7}>
    {(index) => (
      <Slide>
        <h1>What can it be used for?</h1>
        <ul>
          {index >= 1 && (
            <li>Tables, lists, spreadsheets, & charts (<a href='https://github.com/bvaughn/react-virtualized'>react-virtualized</a>)</li>
          )}
          {index >= 2 && (
            <li>Drop-down menus (<a href='https://github.com/bvaughn/react-virtualized-select'>react-virtualized-select</a>)</li>
          )}
          {index >= 3 && (
            <li>Calendar & date-pickers (<a href='https://github.com/clauderic/react-infinite-calendar'>react-infinite-calendar</a>)</li>
          )}
          {index >= 4 && (
            <li>Tree views (<a href='https://github.com/fritz-c/react-sortable-tree'>react-sortable-tree</a>)</li>
          )}
          {index >= 5 && (
            <li>Image carosels</li>
          )}
          {index >= 6 && (
            <li><em>And more...</em></li>
          )}
        </ul>
      </Slide>
    )}
  </Stepper>
);
