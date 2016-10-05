import times from 'lodash.times';
import React from 'react';
import Slide from '../Components/Slide'
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import './10-bypassing-native-browser-limitations.css';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>
        Bypassing native browser limitations
      </h1>
      <p>The solution?</p>
      <ul>
        <Step><li>Scale size and offsets</li></Step>
        <Step><li>But don't scale the viewport!</li></Step>
      </ul>
      <Step>
        <svg width='250' height='320'>
          {times(6).map((index) => (
            <rect key={index} x='0' y={index * 16} className='unscaledListItem' />
          ))}
          {times(4).map((index) => (
            <rect key={index} x='0' y={96 + index * 16} className='unscaledListItemActive' />
          ))}
          {times(10).map((index) => (
            <rect key={index} x='0' y={160 + index * 16} className='unscaledListItem' />
          ))}

          <text x='-52' y='58' className='listLabel'>
            Unscaled
          </text>
          <text x='-38' y='197' className='listLabel'>
            Scaled
          </text>

          <line x1='50' y1='0' x2='198' y2='0' className='listLine' />
          <line x1='50' y1='96' x2='198' y2='48' className='listLineActive' />
          <line x1='50' y1='158' x2='198' y2='110' className='listLineActive' />
          <line x1='50' y1='318' x2='198' y2='190' className='listLine' />

          <g transform="translate(200, 0)">
            {times(6).map((index) => (
              <rect key={index} y={index * 8} className='scaledListItem' />
            ))}
            {times(4).map((index) => (
              <rect key={index} y={48 + index * 16} className='scaledListItemActive' />
            ))}
            {times(10).map((index) => (
              <rect key={index} y={112 + index * 8} className='scaledListItem' />
            ))}
          </g>
        </svg>
      </Step>
    </Slide>
  </Stepper>
);
