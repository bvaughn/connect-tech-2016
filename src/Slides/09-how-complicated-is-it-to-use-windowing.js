import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';
import sourcePlain from './Examples/perf-comparison-plain.js';
import sourceNonVirtualized from './Examples/perf-comparison-non-virtualized.js';
import sourceVirtualized from './Examples/perf-comparison-virtualized.js';

export default () => (
  <Stepper numSteps={3}>
    <Slide>
      <h1>How complicated is it to use windowing?</h1>
      <Step index={0} exactMatch>
        <div>
          <h3>Rendering a list with React</h3>
          <CodeMirror
            highlightLines={[[10,14]]}
            source={sourcePlain}
          />
        </div>
      </Step>
      <Step index={1} exactMatch>
        <div>
          <h3>Rendering a list with React</h3>
          <CodeMirror
            highlightLines={[[2,8]]}
            source={sourceNonVirtualized}
          />
        </div>
      </Step>
      <Step index={2} exactMatch>
        <div>
          <h3>Rendering a list with react-virtualized</h3>
          <CodeMirror
            highlightLines={[[15,21]]}
            source={sourceVirtualized}
          />
        </div>
      </Step>
    </Slide>
  </Stepper>
);
