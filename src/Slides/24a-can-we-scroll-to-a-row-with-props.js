import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Can we scroll to a row with props?</h1>
      <Step>
        <p>
          Many use-cases:
        </p>
      </Step>
      <ul>
        <Step>
          <li>Jump to a notification in a chat application</li>
        </Step>
        <Step>
          <li>Keyboard navigation in a drop-down</li>
        </Step>
        <Step>
          <li>Jump to a cell in a spreadsheet</li>
        </Step>
      </ul>
    </Slide>
  </Stepper>
);
