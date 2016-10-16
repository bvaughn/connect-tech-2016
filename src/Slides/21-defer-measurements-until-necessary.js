import classnames from 'classnames';
import React from 'react';
import LabeledRect from '../Components/LabeledRect';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import SvgWrapper from '../Components/SvgWrapper';

export default () => (
  <Stepper numSteps={4}>
    <Slide>
      <h1>Defer measurements until necessary</h1>
      <p>
        <strong className='QuestionLabel'>Problem</strong>: Measuring wastes cycles.
      </p>
      <Step>
        <Image />
      </Step>
      <Step>
        <p>
          <strong className='AnswerLabel'>Solution</strong>: Don't measure sizes until content is actually displayed.
        </p>
      </Step>
      <Step>
        <p>
          <strong className='AnswerLabel'>Solution</strong>: Use estimated sizes initially and gradually adjust.
        </p>
      </Step>
    </Slide>
  </Stepper>
);

const BOXES = [
  [2, 30],
  [32, 20],
  [52, 45],
  [97, 30],
  [127, 20],
  [147, 40],
  [187, 40],
  [227, 30],
  [257, 45]
]

function Image ({ index }) {
  return (
    <SvgWrapper
      height={304}
      viewBoxHeight={304}
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
              {index >= 2 && index <= 5
                ? 'Rendered'
                : 'Not Rendered'
              }
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