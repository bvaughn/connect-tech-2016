import classnames from 'classnames';
import React from 'react';
import LabeledRect from '../Components/LabeledRect';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import SvgWrapper from '../Components/SvgWrapper';

export default () => (
  <Stepper numSteps={6}>
    <Slide>
      <h1>Can we defer measurements?</h1>
      <Step>
        <p>
          <strong className='QuestionLabel'>Problem</strong>: Measuring wastes cycles, especially if it requires rendering.
        </p>
      </Step>
      <Step>
        <p>
          <strong className='AnswerLabel'>Solution</strong>: Don't measure sizes until content is actually displayed.
        </p>
      </Step>
      <Step>
        <p>
          <strong className='QuestionLabel'>Problem</strong>: But how can we know the total height if we don't measure?
        </p>
      </Step>
      <Step>
        <p>
          <strong className='AnswerLabel'>Solution</strong>: Use estimated sizes initially and gradually adjust.
        </p>
      </Step>
      <Step>
        <Image />
      </Step>
    </Slide>
  </Stepper>
);

const BOXES = [
  [2, 40],
  [42, 20],
  [62, 35],
  [97, 30],
  [127, 20],
  [147, 40],
  [187, 40],
  [227, 40],
  [267, 40]
]

function Image ({ index }) {
  return (
    <SvgWrapper
      height={315}
      viewBoxHeight={315}
      viewBoxWidth={110}
      width={110}
    >
      <g className='HowWorksGroup'>
        <g className='HowWorksRowGroup'>
          {BOXES.map(([y, height], index) => (
            <LabeledRect
              key={index}
              x={6}
              y={y}
              width={100}
              height={height}
              className={classnames({
                HowWorksRowNotRendered: index < 2 || index > 5,
                HowWorksRowRendered: index >= 2 && index <= 5,
                HowWorksRowRenderedOdd: index >= 2 && index <= 5 && index % 2 === 0
              })}
            >
              {index < 2 && 'Not rendered'}
              {index >= 2 && index <= 5 && 'Rendered'}
              {index > 5 && 'Estimated'}
           </LabeledRect>
          ))}
        </g>
        <g className='HowWorksVisible'>
          <rect x={4} y={70} width={104} height={90} className='HowWorksOuterRect' />
        </g>
      </g>
    </SvgWrapper>
  );
}