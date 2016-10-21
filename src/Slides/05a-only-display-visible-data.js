import React from 'react';
import Centered from '../Components/Centered';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import image from '../../public/books.jpg';

export default () => (
  <Stepper numSteps={6}>
    {(index) => {
      if (index === 0) {
        return (
          <Centered>
            <h1>What about all of the elements, painting, etc?</h1>
          </Centered>
        );
      } else {
        return (
          <Slide>
            <Step index={1}><h1>Only display visible data</h1></Step>

            <ul>
              <Step index={2}><li>Technique known as "windowing".</li></Step>
              <Step index={3}><li>Simple to describe but complex to implement.</li></Step>
              <Step index={4}>
                <li>
                  Analog example: books
                  <Step index={5}><span>, Star Wars opening credits</span></Step>
                </li>
              </Step>
            </ul>

            <Step index={4} exactMatch>
              <img
                className='BooksImage'
                role='presentation'
                src={image}
              />
            </Step>
          </Slide>
        );
      }
    }}
  </Stepper>
);
