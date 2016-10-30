import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';
import AnimatedList from '../Components/AnimatedList';
import ExampleList from '../Components/ExampleList';
import Note from '../Components/Note';
import movie from '../../public/overscan-example.mp4';

const Video = styled.video`
  border: 1px solid #ddd;
  border-radius: 0.25rem;
`

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={1} maxIndex={3}>
      <div>
        <Step index={1}><p>(What the heck is "scroll lag"?)</p></Step>
        <Step index={2}>
          <Video
            autoPlay
            height={293}
            loop
            width={220}
          >
            <source
              src={movie}
              type='video/mp4'
            />
          </Video>
        </Step>
        <Step index={3}><Note>This concern is unique to windowing.</Note></Step>
      </div>
    </Step>

    <Step index={4} maxIndex={8}>
      <div>
        <p>Why does windowing cause this?</p>
        <ul>
          <Step index={5}>
            <li>Browsers manage scrolling in a separate thread</li>
          </Step>
          <Step index={6}>
            <li>JavaScript is periodically updated of new scroll positions</li>
          </Step>
          <Step index={7}>
            <li>Sometimes JS doesn't respond fast enough (eg 16ms frame budget)</li>
          </Step>
        </ul>
        <Step index={8}><p>So what can we do about it?</p></Step>
      </div>
    </Step>

    <Step index={9} maxIndex={12}>
      <div>
        <Step index={9} exact>
          <div>
            <p><strong className='AnswerLabel'>Solution</strong>: Use "overscanning"</p> 
            <AnimatedList direction={0} />
          </div>
        </Step>
        <Step index={10} exact>
          <div>
            <p>Shift in the direction being scrolled (scrolling down)</p>
            <AnimatedList direction={1} />
          </div>
        </Step>
        <Step index={11} exact>
          <div>
            <p>Shift in the direction being scrolled (scrolling up)</p>
            <AnimatedList direction={-1} />
          </div>
        </Step>
        <Step index={12} exact>
          <div>
            <ExampleList />

            <Note>
              View source to see overscanned rows
            </Note>
          </div>
        </Step>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'What about scroll lag?';

export default slide;
