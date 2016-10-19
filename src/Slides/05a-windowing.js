import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import image from '../../public/books.jpg';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Only display visible data</h1>

      <ul>
        <Step><li>Technique known as "windowing".</li></Step>
        <Step><li>Simple to describe but complex to implement.</li></Step>
      </ul>

      <Step>
        <img
          className='BooksImage'
          role='presentation'
          src={image}
        />
      </Step>
    </Slide>
  </Stepper>
);
