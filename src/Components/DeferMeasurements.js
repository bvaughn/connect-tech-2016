import classnames from 'classnames';
import React from 'react';
import LabeledRect from '../Components/LabeledRect';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import SvgWrapper from '../Components/SvgWrapper';

const BOXES = [
  [2, 40],
  [42, 20],
  [62, 35],
  [97, 30],
  [127, 20],
  [147, 40],
  [187, 40],
  [227, 40]
]

export default function DeferMeasurements () {
  return (
    <SvgWrapper
      height={275}
      viewBoxHeight={275}
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