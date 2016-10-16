import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Only display visible data</h1>

      <p>Websites and mobile apps do this as well ("windowing")</p>

      <ul>
        <Step><li>Given a small list (eg <code>&lt;ul&gt;</code>, <code>UITableView</code>)</li></Step>
        <Step><li>And a huge set of items (eg <code>&lt;li&gt;</code>, <code>UITableViewCell</code>)</li></Step>
        <Step><li>And a scroll position</li></Step>
        <Step><li>Which items are visible?</li></Step>
      </ul>
    </Slide>
  </Stepper>
);
