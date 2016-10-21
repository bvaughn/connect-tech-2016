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
        <Step index={1}>
          <li>
            Performance impacts framerate
            <Step index={2}><ul><li>Most people have older hardware</li></ul></Step>
          </li>
        </Step>
        <Step index={3}><li>Smooth scrolling is an important factor in mobile UX</li></Step>
        <Step index={4}><li>Battery life (eg mobile, laptops)</li></Step>
        <Step index={5}><li>Abandonment rate</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
