import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import image from '../../public/cache-all-the-things.png';
import './23-cache-all-the-things.css';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1 className='CacheAllTheThingsHeader'>
        Cache all the things
        <img
          className='CacheAllTheThingsImage'
          height={57}
          role='presentation'
          src={image}
          width={92}
        />
      </h1>
      <ul>
        <Step><li><code>Grid</code> caches cell sizes and positions</li></Step>
        <Step><li><code>CellMeasurer</code> caches measurements</li></Step>
        <Step><li><code>Grid</code> also caches rendered cells while a scroll is in progress</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
