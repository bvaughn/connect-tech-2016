import classnames from 'classnames';
import times from 'lodash.times';
import React from 'react';
import Slide from '../Components/Slide'
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import './26-did-you-know-about-DOM-element-size-constraints.css';

export default () => (
  <Stepper numSteps={6}>
    {(index) => (
      <Slide>
        <h1>
          Did you know about DOM element size constraints?
        </h1>
        <h2>So how can we beat this?</h2>
        <Step><p><strong className='AnswerLabel'>Solution</strong>: Compress things.</p></Step>
        <ul>
          <Step><li>Scale/compress positions of hidden rows</li></Step>
          <Step><li>Render visible rows normally</li></Step>
        </ul>
        <Step>
          <div>
            <div className={classnames('TopGroup', {
              TopGroupScaled: index === 5
            })}>
              {times(3).map((index) => (
                <div key={index} className='unscaledListItem' />
              ))}
            </div>
            <div className={classnames('MiddleGroup', {
              MiddleGroupScaled: index === 5
            })}>
              {times(4).map((index) => (
                <div key={index} className='unscaledListItemActive' />
              ))}

              <div className='outerScrollContainer' />
            </div>
            <div className={classnames('BottomGroup', {
              BottomGroupScaled: index === 5
            })}>
              {times(5).map((index) => (
                <div key={index} className='unscaledListItem' />
              ))}
            </div>
          </div>
        </Step>
      </Slide>
    )}
  </Stepper>
);
