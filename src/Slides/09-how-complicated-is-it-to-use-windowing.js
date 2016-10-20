import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';
import sourcePlain from './Examples/perf-comparison-plain.js';
import sourceNonVirtualized from './Examples/perf-comparison-non-virtualized.js';
import sourceVirtualized from './Examples/perf-comparison-virtualized.js';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>How complicated is it to use windowing?</h1>
      <Step index={0} exactMatch>
        <div>
          <h2>Rendering a list with React</h2>
          <CodeMirror source={sourcePlain} />
        </div>
      </Step>
      <Step index={1} exactMatch>
        <div>
          <h2>Rendering a list with React</h2>
          <CodeMirror
            dimLines={[[0,9], [15,17]]}
            source={sourcePlain}
          />
        </div>
      </Step>
      <Step index={2} exactMatch>
        <div>
          <h2>Rendering a list with React</h2>
          <CodeMirror
            dimLines={[[0,1], [9,17], [19,21]]}
            source={sourceNonVirtualized}
          />
        </div>
      </Step>
      <Step index={3} exactMatch>
        <div>
          <h2>Rendering a list with react-virtualized</h2>
          <CodeMirror source={sourceVirtualized} />
        </div>
      </Step>
      <Step index={4} exactMatch>
        <div>
          <h2>Rendering a list with react-virtualized</h2>
          <CodeMirror
            dimLines={[[0,1], [11,14], [22,23]]}
            source={sourceVirtualized}
          />
        </div>
      </Step>
    </Slide>
  </Stepper>
);
