import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import chatImage from '../../public/non-uniform-heights-chat.png';
import dropDownImage from '../../public/non-uniform-heights-drop-down.png';

export default () => (
  <Stepper numSteps={7}>
    <Slide>
      <h1>Can it handle items with varying heights?</h1>
      <Step><p>This introduces a couple of challenges:</p></Step>
      <ul>
        <Step><li>Calculating total size becomes more difficult</li></Step>
        <Step><li>Measuring all items hurts performance</li></Step>
      </ul>
      <Step><p>Two basic cases:</p></Step>
      <ul>
        <Step><li>Size can be inferred from the data (eg drop-down rows &amp; headers)</li></Step>
        <Step><li>Size must be measured by the browser (eg chat messages)</li></Step>
      </ul>
      <Step index={5} exactMatch>
        <img src={dropDownImage} role='presentation' width={250} />
      </Step>
      <Step index={6} exactMatch>
        <img src={chatImage} role='presentation' />
      </Step>
    </Slide>
  </Stepper>
);
