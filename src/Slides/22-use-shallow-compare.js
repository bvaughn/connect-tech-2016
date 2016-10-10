import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import image from '../../public/should-component-update.png';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Use <code>shallowCompare</code></h1>
      <Step><p>All components use <a href='https://facebook.github.io/react/docs/shallow-compare.html'><code>shallowCompare</code></a> to avoid unnecessary renders.</p></Step>
      <Step>
        <img
          height={371}
          role='presentation'
          src={image}
          width={555}
        />
      </Step>
      <Step><p>Learn more <a href='https://facebook.github.io/react/docs/shallow-compare.html'>here</a> and <a href='https://facebook.github.io/react/docs/advanced-performance.html'>here</a>.</p></Step>
    </Slide>
  </Stepper>
);
