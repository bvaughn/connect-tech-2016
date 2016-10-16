import React from 'react';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';
import calendarGif from '../../public/how-is-it-used-calendar.gif';
import dropDownGif from '../../public/how-is-it-used-dropdown.gif';
import tableGif from '../../public/how-is-it-used-table.gif';
import treeGif from '../../public/how-is-it-used-tree.gif';
import './07-what-can-windowing-be-used-for.css';

export default () => (
  <Stepper numSteps={7}>
    <Slide>
      <h1>What can windowing be used for?</h1>
      <ul>
        <Step index={1}>
          <li>Tables, lists, spreadsheets, & charts (<a href='https://github.com/bvaughn/react-virtualized'>react-virtualized</a>)</li>
        </Step>
        <Step index={2}>
          <li>Drop-down menus (<a href='https://github.com/bvaughn/react-virtualized-select'>react-virtualized-select</a>)</li>
        </Step>
        <Step index={3}>
          <li>Calendar & date-pickers (<a href='https://github.com/clauderic/react-infinite-calendar'>react-infinite-calendar</a>)</li>
        </Step>
        <Step index={4}>
          <li>Tree views (<a href='https://github.com/fritz-c/react-sortable-tree'>react-sortable-tree</a>)</li>
        </Step>
        <Step index={5}>
          <li>Image carousels</li>
        </Step>
        <Step index={6}>
          <li><em>And more...</em></li>
        </Step>
      </ul>

      <div className='HowCanItBeUsedImageContainer'>
        <Step index={1} exactMatch>
          <img className='HowCanItBeUsedImage' role='presentation' src={tableGif} width={320} height={223} />
        </Step>
        <Step index={2} exactMatch>
          <img className='HowCanItBeUsedImage' role='presentation' src={dropDownGif} width={250} height={161} />
        </Step>
        <Step index={3} exactMatch>
          <img className='HowCanItBeUsedImage' role='presentation' src={calendarGif} width={153} height={240} />
        </Step>
        <Step index={4} exactMatch>
          <img className='HowCanItBeUsedImage' role='presentation' src={treeGif} width={423} height={284} />
        </Step>
      </div>
    </Slide>
  </Stepper>
);
