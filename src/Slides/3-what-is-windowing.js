import React from 'react';
import List from './Components/AnimatedList';
import Slide from './Components/Slide'

// @TODO Sequence
export default () => (
  <Slide>
    <h1>What is windowing?</h1>
    <h3>Only rendering enough elements to fill the viewport.</h3>
    <List
      direction={0}
      overscanCount={0}
    />
  </Slide>
);
