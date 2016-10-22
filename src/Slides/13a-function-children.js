import React from 'react';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Function children <small>(aka render callbacks)</small></h1>
      <p>Very powerful pattern!</p>
      <Step index={1}>
        <ul>
          <li>Allows you to mix-and-match components</li>
          <Step index={2}>
            <li>Which enables more modular (maintainable) code</li>
          </Step>
          <Step index={3}>
            <li>An alternative to <code>context</code> (React docs: "use sparingly")</li>
          </Step>
        </ul>
      </Step>
    </Slide>
  </Stepper>
);
