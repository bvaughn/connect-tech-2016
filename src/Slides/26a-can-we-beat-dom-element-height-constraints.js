import React from 'react';
import Slide from '../Components/Slide'
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import image from '../../public/browser-limits-cutoff.png';

export default () => (
  <Stepper numSteps={6}>
    <Slide>
      <h1>
        Can we beat DOM element height constraints?
      </h1>
      <Step>
        <p>
          <strong className='QuestionLabel'>Problem</strong>:
          DOM elements have height constraints (eg Chrome 33.5M px, IE 1.5M px)
        </p>
      </Step>
      <ul>
        <Step><li>Browser won't render items past this point</li></Step>
        <Step><li>You can't scroll past it either</li></Step>
        <Step><li>Layout gets wonky as you approach the threshold</li></Step>
      </ul>
      <Step>
        <img
          height={300}
          role='presentation' 
          src={image}
          width={332}
        />
      </Step>
    </Slide>
  </Stepper>
);
