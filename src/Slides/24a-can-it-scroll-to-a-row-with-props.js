import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Can it scroll to a row with props?</h1>
      <Step><h2>Why would we want to?</h2></Step>
      <ul>
        <Step>
          <li>Scroll to unread notification in a chat application</li>
        </Step>
        <Step>
          <li>Jump to a cell in a spreadsheet</li>
        </Step>
        <Step>
          <li>Keyboard navigation in a drop-down (eg this presentation)</li>
        </Step>
      </ul>
    </Slide>
  </Stepper>
);
