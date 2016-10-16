import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Avoid unnecessary renders</h1>
      <p>Is that all?</p>
      <ul>
        <Step><li>Choose <code>props</code> carefully (eg <code>userName</code> not <code>user</code>)</li></Step>
        <Step><li>Use immutable data (see <a href='https://facebook.github.io/immutable-js/'>Immutable JS</a>)</li></Step>
      </ul>
      <Step><h2>This also helps with testing!</h2></Step>
    </Slide>
  </Stepper>
);
