import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';
import source from './Examples/resizable-cells-key-points.js';

export default () => (
  <Stepper numSteps={2}>
    <Slide>
      <Step exactMatch index={0}>
        <CodeMirror
          dimLines={[[1,10], [17,29]]}
          source={source}
        />
      </Step>
      <Step exactMatch index={1}>
        <CodeMirror source={source} />
      </Step>
    </Slide>
  </Stepper>
);
