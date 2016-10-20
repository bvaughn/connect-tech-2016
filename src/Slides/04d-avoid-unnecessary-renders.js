import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Avoid unnecessary renders</h1>
      <h2>Is that all?</h2>
      <ul>
        <Step><li><a href='https://facebook.github.io/immutable-js/'>Immutable</a> data speeds up comparisons</li></Step>
        <Step>
          <li>
            Choose <code>props</code> carefully (eg <code>userName</code> not <code>user</code>)

            <Step><ul><li>This also helps with testing!</li></ul></Step>
          </li>
        </Step>
      </ul>
    </Slide>
  </Stepper>
);
