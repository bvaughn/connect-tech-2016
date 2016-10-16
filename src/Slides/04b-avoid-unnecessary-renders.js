import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import ScuChart from '../Components/ScuChart';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Avoid unnecessary renders</h1>
      <p><code>shouldComponentUpdate</code> can help!</p>
      <ul>
        <Step><li>Let React know when it's safe to skip rendering</li></Step>
        <Step><li>Children are skipped as well</li></Step>
      </ul>
      <Step><ScuChart scu='some' /></Step>
    </Slide>
  </Stepper>
);
