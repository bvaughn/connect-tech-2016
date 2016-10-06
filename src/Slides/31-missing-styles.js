import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Note from '../Components/Note';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import sourceHtml from './Examples/include-styles-html.js';
import sourceJs from './Examples/include-styles-js.js';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Missing styles</h1>
      <p>Most common cause of bugs: forgot to include styles.</p>
      <Step>
        <div>
          You can include them in your HTML:
          <br/><br/>
          <CodeMirror source={sourceHtml} />
        </div>
      </Step>
      <br/>
      <Step>
        <div>
          Or you can include them during application's bootstrapping:
          <br/><br/>
          <CodeMirror source={sourceJs} />
        </div>
      </Step>
      <br/>
      <Step>
        <Note>
          Version 8 no longer requires styles unless you're using the Table component
        </Note>
      </Step>
    </Slide>
  </Stepper>
);
