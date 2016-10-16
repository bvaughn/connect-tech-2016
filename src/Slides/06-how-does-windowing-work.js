import classnames from 'classnames';
import times from 'lodash.times';
import React from 'react';
import LabeledRect from '../Components/LabeledRect';
import SvgWrapper from '../Components/SvgWrapper';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import './06-how-does-windowing-work.css';

export default () => (
  <Stepper numSteps={5}>
    {(index) => (
      <Slide>
        <h1>How does windowing work?</h1>
        <ul>
          <li className={classnames({ HowWorksHidden: index < 1 })}>
            Normal DOM element for presenting data (eg <code>&lt;div&gt;</code>, 180px tall)
          </li>
          <li className={classnames({ HowWorksHidden: index < 2 })}>
            Set of items (eg 10 items, each 60px tall)
          </li>
          <li className={classnames({ HowWorksHidden: index < 3 })}>
            Big DOM element for scrolling (eg 600px tall)
          </li>
          <li className={classnames({ HowWorksHidden: index < 4 })}>
            Absolutely positioned rendered items
          </li>
        </ul>
        <Image index={index} />
      </Slide>
    )}
  </Stepper>
);

function Image ({ index }) {
  const groupClassName = classnames('HowWorksGroup', {
    HowWorksGroupSkewed: index > 2
  })
  const innerGroupClassName = classnames('HowWorksHidden', {
    HowWorksVisible: index > 2
  })
  const innerLinesClassName = classnames('HowWorksInnerLine', {
    HowWorksHidden: index > 3
  })
  const outerGroupClassName = classnames('HowWorksHidden', {
    HowWorksVisible: index > 0
  })
  const rowGroupClassName = classnames('HowWorksRowGroup', 'HowWorksHidden', {
    HowWorksVisible: index > 3
  })

  return (
    <SvgWrapper
      height={300}
      viewBoxHeight={300}
      viewBoxWidth={300}
      width={300}
    >
      <g className={groupClassName}>
        <g className={innerGroupClassName}>
          {times(9).map((index) => (
            <line key={index} x1={25} y1={30 * (index + 1)} x2={125} y2={30 * (index + 1)} className={innerLinesClassName} />
          ))}
          <rect x={25}  y={0}  width={100} height={300} className='HowWorksInnerRect' />
        </g>
        <g className={rowGroupClassName}>
          {times(10).map((index) => (
            <LabeledRect
              key={index}
              x={25}
              y={index * 30}
              width={100}
              height={30}
              className={classnames({
                HowWorksRowNotRendered: index < 2 || index > 5,
                HowWorksRowRendered: index >= 2 && index <= 5
              })}
            >
              {index >= 2 && index <= 5
                ? 'Rendered'
                : 'Not Rendered'
              }
           </LabeledRect>
          ))}
        </g>
        <g className={outerGroupClassName}>
          <rect x={100} y={70} width={100} height={90} className='HowWorksOuterRect' />
        </g>
      </g>
    </SvgWrapper>
  );
}