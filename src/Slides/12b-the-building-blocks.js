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
          <h2>Grid</h2>

          <GridSvg />
        </div>
      </Step>
    </Slide>
  </Stepper>
);

const GRID_BOX_OFFSETS = [10, 105, 200]
const HIDDEN_GRID_BOX_OFFSETS = [[295, 10], [295, 105], [295, 200], [10, 295], [105, 295], [200, 295], [295, 295]]

function GridSvg (props) {
  return (
    <BuildingBlocksSvgWrapper
      {...props}
      height={385}
      viewBoxHeight={385}
      viewBoxWidth={385}
      width={385}
    >
      {GRID_BOX_OFFSETS.map((xOffset, xIndex) => (
        GRID_BOX_OFFSETS.map((yOffset, yIndex) => (
          <LabeledRect
            key={`${xOffset}${yOffset}`}
            x={xOffset}
            y={yOffset}
            width={90}
            height={90}
            className='svgGridBox'
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
          width={90}
          height={90}
          className='svgGridBoxNotRendered'
        >
          Hidden
       </LabeledRect>
      ))}
      <rect x={274} y={0} width={111} height={274} className='svgNotRenderedDimmer' />
      <rect x={0} y={274} width={385} height={111} className='svgNotRenderedDimmer' />
    </BuildingBlocksSvgWrapper>
  );
}
