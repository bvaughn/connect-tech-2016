import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import image from '../../public/occlusion-culling.jpg';
import './05-windowing.css';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Only display visible data</h1>

      <p>Video games do this ("Occlusion Culling")</p>

      <ul>
        <Step><li>Given a perspective of a user/camera</li></Step>
        <Step><li>Which objects are in the direction being viewed</li></Step>
        <Step><li>Which ones aren't obscurred by other items (eg walls)</li></Step>
      </ul>

      <Step>
        <img
          className='OcclusionImage'
          role='presentation'
          src={image}
        />
      </Step>
    </Slide>
  </Stepper>
);
