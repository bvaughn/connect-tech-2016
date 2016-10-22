import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import image from '../../public/computer-guy.png';

export default () => (
  <Stepper numSteps={6}>
    <Slide>
      <h1>Why does performance matter?</h1>
      <Step index={0} exactMatch>
        <img
          height={144}
          role='presentation'
          src={image}
          width='auto'
        />
      </Step>
      <ul>
        <Step><li>Most people have older hardware</li></Step>
        <Step><li>Performance impacts framerate</li></Step>
        <Step><li>Smooth scrolling is an important factor in mobile UX</li></Step>
        <Step><li>Battery life (eg mobile, laptops)</li></Step>
        <Step><li>Abandonment rate</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
