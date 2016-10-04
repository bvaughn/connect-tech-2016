import React from 'react';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={4}>
    {(index) => (
      <Slide>
        <h1>Function children <small>(aka render callbacks)</small></h1>
        <p>Function children are powerful!</p>
        {index >= 1 && (
          <ul>
            <li>They enable arbitrary composition</li>
            {index >= 2 && (
              <li>Which enables more modular code (aka more maintainable code)</li>
            )}
            {index >= 3 && (
              <li>They provide an alternative to <code>context</code></li>
            )}
          </ul>
        )}
      </Slide>
    )}
  </Stepper>
);
