import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Scrolling to cells via props</h1>
      <p>
        Why is this important?
      </p>
      <ul>
        <Step>
          <li>Keyboard navigation in a drop-down</li>
        </Step>
        <Step>
          <li>Jump to a cell in a spreadsheet</li>
        </Step>
        <Step>
          <li>Jump to a mention in a chat log</li>
        </Step>
        <Step>
          <li>Highlight an error in a table</li>
        </Step>
      </ul>
    </Slide>
  </Stepper>
);
