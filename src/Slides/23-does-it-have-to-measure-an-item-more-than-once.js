import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import image from '../../public/cache-all-the-things.png';
import './23-does-it-have-to-measure-an-item-more-than-once.css';

export default () => (
  <Stepper numSteps={8}>
    <Slide>
      <h1>Does it have to measure everything up front?</h1>

      <Step>
        <p>
          <strong className='AnswerLabel'>Answer</strong>: No! Cache all measurements!
        </p>
      </Step>

      <div className='Spacer' />

      <Step>
        <p>
          <strong className='QuestionLabel'>Question</strong>: Can we cache more than this? <Step index={3}><span>Can we cache the rows themselves?</span></Step>
        </p>
      </Step>

      <Step index={4}>
        <img
          className='CacheAllTheThingsImage'
          height={57}
          role='presentation'
          src={image}
          width={92}
        />
      </Step>

      <Step index={5}>
        <p>
          <strong className='AnswerLabel'>Answer</strong>: Yes, but it's tricky.
        </p>
      </Step>

      <ul>
        <Step index={6}>
          <li>Cache rendered rows while scrolling</li>
        </Step>
        <Step index={7}>
          <li>Clear cache when scrolling stops</li>
        </Step>
      </ul>
    </Slide>
  </Stepper>
);
