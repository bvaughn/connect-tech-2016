import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Who am I?</h1>
      <ul>
        <Step><li>Writing JavaScript professionally for 15 years</li></Step>
        <Step><li>Worked some cool places: Rosetta Stone, Google, Treasure Data, Facebook</li></Step>
        <Step><li>I <i className='fa fa-heart' style={{ color: '#f92672' }} /> open source (<a href="https://github.com/bvaughn/">github.com/bvaughn</a>)</li></Step>
        <Step><li>Passionate about performance and architecture</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
