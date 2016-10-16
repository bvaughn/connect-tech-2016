import classnames from 'classnames';
import React from 'react';
import BuildingBlocksSvgWrapper from '../Components/BuildingBlocksSvgWrapper';
import LabeledRect from '../Components/LabeledRect';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';
import './12-the-building-blocks.css';

export default () => (
  <Stepper numSteps={3}>
    <Slide>
      <h1>
        The building blocks
      </h1>

      <p>
        I'm going to blow your mind now: <Step><span>Windowing isn't just vertical!</span></Step>
      </p>

      <Step>
        <div>
          <h3>Grid</h3>

          <GridSvg />
        </div>
      </Step>
    </Slide>
  </Stepper>
);

const GRID_BOX_OFFSETS = [10, 100, 190]
const HIDDEN_GRID_BOX_OFFSETS = [[290, 10], [290, 100], [290, 190], [10, 290], [100, 290], [190, 290]]

function GridSvg (props) {
  return (
    <BuildingBlocksSvgWrapper
      {...props}
      height={371}
      viewBoxHeight={371}
      viewBoxWidth={371}
      width={371}
    >
      {GRID_BOX_OFFSETS.map((xOffset, xIndex) => (
        GRID_BOX_OFFSETS.map((yOffset, yIndex) => (
          <LabeledRect
            key={`${xOffset}${yOffset}`}
            x={xOffset}
            y={yOffset}
            width={80}
            height={80}
            className={classnames('svgGridBox', {
              svgOddRow: (xIndex + yIndex) % 2 === 1
            })}
          >
            Cell
         </LabeledRect>
        ))
      ))}
      {HIDDEN_GRID_BOX_OFFSETS.map(([xOffset, yOffset], index) => (
        <LabeledRect
          key={index}
          x={xOffset}
          y={yOffset}
          width={80}
          height={80}
          className='svgGridBoxNotRendered'
        >
          Hidden
       </LabeledRect>
      ))}
    </BuildingBlocksSvgWrapper>
  );
}
