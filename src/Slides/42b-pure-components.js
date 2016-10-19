import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import sourceA from './Examples/pass-through-props.js';
import sourceB from './Examples/force-update.js';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Pure components</h1>
      <p>
        <strong className='AnswerLabel'>Solution</strong>:
        Let react-virtualized know that something external has changed:
      </p>
      <Step exactMatch>
        <div>
          <p>The simplest way is with pass-through properties:</p>
          <CodeMirror
            dimLines={[[0,0], [2,5], [7,9]]}
            source={sourceA}
          />
        </div>
      </Step>
      <Step exactMatch>
        <div>
          <p>The simplest way is with pass-through properties:</p>
          <CodeMirror source={sourceA} />
        </div>
      </Step>
      <Step exactMatch>
        <div>
          <p>But you can also use Api methods (eg <code>forceUpdate</code>)</p>
          <CodeMirror
            dimLines={[[0,0], [6,10], [12,15]]}
            source={sourceB}
          />
        </div>
      </Step>
      <Step exactMatch>
        <div>
          <p>But you can also use Api methods (eg <code>forceUpdate</code>)</p>
          <CodeMirror source={sourceB} />
        </div>
      </Step>
    </Slide>
  </Stepper>
);
