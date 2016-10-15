import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import sourceA from './Examples/pass-through-props.js';
import sourceB from './Examples/force-update.js';

export default () => (
  <Stepper numSteps={3}>
    <Slide>
      <h1>Pure components</h1>
      <p>
        <strong className='AnswerLabel'>Solution</strong>:
        Let react-virtualized know that something external has changed:
      </p>
      <Step>
        <div>
          <p>The simplest way is with pass-through properties:</p>
          <CodeMirror
            highlightLines={[[6,6]]}
            source={sourceA}
          />
        </div>
      </Step>
      <Step>
        <div>
          <p>But you can also use Api methods (eg <code>forceUpdate</code>)</p>
          <CodeMirror
            highlightLines={[[2,4]]}
            source={sourceB}
          />
        </div>
      </Step>
    </Slide>
  </Stepper>
);
