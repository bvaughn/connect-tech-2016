import React from 'react';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={4}>
    {(index) => (
      <Slide>
        <h1>Function children <small>(aka render callbacks)</small></h1>
        <p>react-virtualized makes heavy use of this pattern because it is powerful.</p>
        {index >= 1 && (
          <ul>
            <li>It enables arbitrary composition</li>
            {index >= 2 && (
              <li>Which enables more modular code (aka more maintainable code)</li>
            )}
            {index >= 3 && (
              <li>It provides an alternative to <code>context</code></li>
            )}
          </ul>
        )}
      </Slide>
    )}
  </Stepper>
);
