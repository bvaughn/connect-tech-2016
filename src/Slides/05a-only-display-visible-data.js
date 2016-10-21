import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import image from '../../public/books.jpg';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Only display visible data</h1>

      <ul>
        <Step><li>Technique known as "windowing".</li></Step>
        <Step><li>Simple to describe but complex to implement.</li></Step>
        <Step>
          <li>
            Analog example: books
            <Step index={4}><span>, Star Wars opening credits</span></Step>
          </li>
        </Step>
      </ul>

      <Step index={3} exactMatch>
        <img
          className='BooksImage'
          role='presentation'
          src={image}
        />
      </Step>
    </Slide>
  </Stepper>
);
