import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import image from '../../public/telephone.png';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Why does performance matter?</h1>
      <Step index={0} exactMatch>
        <img
          height={250}
          role='presentation'
          src={image}
          width='auto'
        />
      </Step>
      <ul>
        <Step><li>Performance impacts framerate</li></Step>
        <Step><li>Smooth scrolling is an important factor in mobile UX</li></Step>
        <Step><li>Battery life (eg mobile, laptops)</li></Step>
        <Step><li>Abandronment rate</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
