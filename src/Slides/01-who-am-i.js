import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import logoRosettaStone from '../../public/logo-rosetta-stone.jpg';
import logoGoogle from '../../public/logo-google.jpg';
import logoTreasureData from '../../public/logo-treasure-data.jpg';
import logoFacebook from '../../public/logo-facebook.png';
import './01-who-am-i.css';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Who am I?</h1>
      <ul>
        <Step><li>Software engineer for &gt; 15 years</li></Step>
        <Step>
          <li>
            I've worked some cool places:
            <div className='WhoAmILogos'>
              <img role='presentation' className='WhoAmILogo' src={logoRosettaStone} />
              <img role='presentation' className='WhoAmILogo' src={logoGoogle} />
              <img role='presentation' className='WhoAmILogo' src={logoTreasureData} />
              <img role='presentation' className='WhoAmILogo' src={logoFacebook} />
            </div>
          </li>
        </Step>
        <Step><li>I <i className='fa fa-heart' style={{ color: '#f92672' }} /> open source (<a href="https://github.com/bvaughn/">github.com/bvaughn</a>)</li></Step>
        <Step><li>Passionate about performance and architecture</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
