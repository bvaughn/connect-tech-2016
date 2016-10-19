import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import image from '../../public/thoughtful-meme.jpg';

export default () => (
  <Stepper numSteps={6}>
    <Slide>
      <h1>Why are we here?</h1>
      <Step index={0} exactMatch>
        <img
          height={200}
          role='presentation'
          src={image}
          width='auto'
        />
      </Step>
      <Step><h2>We're here to talk about performance.</h2></Step>
      <ul>
        <Step><li>Huge topic</li></Step>
        <Step><li>Can't possibly cover it all</li></Step>
        <Step><li>Focus on things that slow React applications down</li></Step>
        <Step><li>Talk about ways to fix them</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
