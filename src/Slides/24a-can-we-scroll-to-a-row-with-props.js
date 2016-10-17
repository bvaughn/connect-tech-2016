import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import slackImage from '../../public/jump-to-row-slack.png';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Can we scroll to a row with props?</h1>
      <Step><p>Why would we want to?</p></Step>
      <ul>
        <Step>
          <li>Scroll to unread notification in a chat application</li>
        </Step>
        <Step>
          <li>Keyboard navigation in a drop-down</li>
        </Step>
        <Step>
          <li>Jump to a cell in a spreadsheet</li>
        </Step>
      </ul>
      <Step index={2} exactMatch>
        <img src={slackImage} role='presentation' height={300} width='auto' />
      </Step>
    </Slide>
  </Stepper>
);
