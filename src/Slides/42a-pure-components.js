import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={7}>
    <Slide>
      <h1>Pure components</h1>
      <ul>
        <Step index={1}><li>All components use <a href='https://facebook.github.io/react/docs/shallow-compare.html'><code>shallowCompare</code></a></li></Step>
        <Step index={2}><li>No components have access to the underlying array/collection</li></Step>
      </ul>
      <Step index={3}>
        <div>
          <h2>This means...</h2>
          <ul>
            <Step index={4}><li>Sorting a list will not auto-update RV components</li></Step>
            <Step index={5}><li>Changing an item within a list will not auto-update RV components</li></Step>
            <Step index={6}><li>State changes that change item sizes will not auto-update RV components</li></Step>
          </ul>
        </div>
      </Step>
    </Slide>
  </Stepper>
);
