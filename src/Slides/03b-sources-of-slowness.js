import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import './03-sources-of-slowness.css';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Sources of slowness in React apps</h1>

      <h2>
        Browser
        <i className='fa fa-check SectionCheck' />
      </h2>

      <h2>React</h2>
      <ul>
        <Step><li>Creating lots of Elements</li></Step>
        <Step><li>Unnecessary renders</li></Step>
        <Step><li>Heavy / complex elements</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
