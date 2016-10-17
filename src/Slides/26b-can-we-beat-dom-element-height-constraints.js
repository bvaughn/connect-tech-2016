import times from 'lodash.times';
import React from 'react';
import Slide from '../Components/Slide'
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import './26-can-we-beat-dom-element-size-limits.css';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>
        Can we beat DOM element height constraints?
      </h1>
      <h2>So how can we beat this?</h2>
      <Step><p><strong className='AnswerLabel'>Solution</strong>: Scale things down.</p></Step>
      <ul>
        <Step><li>Scale/shift positions of hidden rows</li></Step>
        <Step><li>Render visible rows normally</li></Step>
      </ul>
      <Step>
        <svg
          width='380'
          height='480'
          viewBox='0 0 260 320'
          preserveAspectRatio='xMinYMax meet'
        >
          {times(6).map((index) => (
            <rect key={index} x='0' y={index * 16} className='unscaledListItem' />
          ))}
          {times(4).map((index) => (
            <rect key={index} x='0' y={96 + index * 16} className='unscaledListItemActive' />
          ))}
          {times(10).map((index) => (
            <rect key={index} x='0' y={160 + index * 16} className='unscaledListItem' />
          ))}

          <text x='-63' y='59' className='listLabel'>
            Unscaled
          </text>
          <text x='-46' y='259' className='listLabel'>
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
