import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Avoid unnecessary renders</h1>
      <h2>Is that all?</h2>
      <ul>
        <Step><li><a href='https://facebook.github.io/immutable-js/'>Immutable</a> data speeds up comparisons</li></Step>
        <Step>
          <li>
            Choose <code>props</code> carefully <Step index={3}><span>(also helps with testing!)</span></Step>

            <ul>
              <li><i className='fa fa-frown-o' /> users</li>
              <li><i className='fa fa-meh-o' /> user</li>
              <li><i className='fa fa-smile-o' /> name</li>
            </ul>
          </li>
        </Step>
      </ul>
    </Slide>
  </Stepper>
);
