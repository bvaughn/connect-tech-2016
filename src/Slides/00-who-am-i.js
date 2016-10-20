import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import './00-who-am-i.css';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Who am I?</h1>
      <ul>
        <Step><li>Software engineer for ~16 years</li></Step>
        <Step>
          <li>
            I've worked some cool places:
            <ul>
              <li>Facebook</li>
              <li>Google</li>
              <li>Rosetta Stone</li>
              <li>Treasure Data</li>
            </ul>
          </li>
        </Step>
        <Step><li>I <i className='fa fa-heart' style={{ color: '#f92672' }} /> open source (<a href="https://github.com/bvaughn/">github.com/bvaughn</a>)</li></Step>
        <Step><li>Passionate about performance, search, and architecture</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
