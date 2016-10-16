import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={7}>
    <Slide>
      <h1>Why is windowing important?</h1>
      <ul>
        <Step><li>Creating DOM elements (or executing <code>render</code> logic) takes time</li></Step>
        <Step><li>Unnecessary layout and painting wastes battery</li></Step>
        <Step><li>Bad framerate makes your application feel poorly written</li></Step>
      </ul>
      <Step>
        <p>
          These concerns apply to <em>every</em> render. They are even more important for mobile, where...
        </p>
      </Step>
      <ul>
        <Step><li>Smooth scrolling is a crucial part of the UX</li></Step>
        <Step><li>Keeping the DOM light helps the rest of the application run quickly</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
