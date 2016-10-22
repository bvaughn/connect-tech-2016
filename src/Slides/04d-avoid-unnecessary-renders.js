import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={7}>
    <Slide>
      <h1>Avoid unnecessary renders</h1>
      <h2>Is that all?</h2>
      <ul>
        <Step><li><a href='https://facebook.github.io/immutable-js/'>Immutable</a> data speeds up comparisons</li></Step>
        <Step>
          <li>
            Choose <code>props</code> carefully <Step index={6}><span>(also helps with testing!)</span></Step>

            <ul>
              <Step index={3}><li><i className='fa fa-frown-o' /> <code>users</code>, <code>index</code></li></Step>
              <Step index={4}><li><i className='fa fa-smile-o' /> <code>user</code></li></Step>
              <Step index={5}><li><i className='fa fa-smile-o' /><i className='fa fa-smile-o' /> <code>name</code>, <code>email</code></li></Step>
            </ul>
          </li>
        </Step>
      </ul>
    </Slide>
  </Stepper>
);
