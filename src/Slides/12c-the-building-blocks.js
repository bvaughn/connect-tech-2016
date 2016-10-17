import React from 'react';
import BuildingBlocksSvgWrapper from '../Components/BuildingBlocksSvgWrapper';
import LabeledCircle from '../Components/LabeledCircle';
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

      <ul>
        <li>What about data that isn't linear (eg Gantt charts, graphs)?</li>
        <Step><li>Can we even window this type of data?</li></Step>
      </ul>

      <Step>
        <div>
          <h3>Collection</h3>

          <CollectionSvg />
        </div>
      </Step>
    </Slide>
  </Stepper>
);

function CollectionSvg (props) {
  return (
    <BuildingBlocksSvgWrapper
      {...props}
      height={371}
      viewBoxHeight={371}
      viewBoxWidth={380}
      width={380}
    >
      <LabeledCircle
        cx={70}
        cy={70}
        r={50}
        className='svgCollectionBox'
      >
        Circle
      </LabeledCircle>
      <LabeledRect
        x={160}
        y={100}
        width={80}
        height={80}
        className='svgCollectionBox'
      >
        Square
      </LabeledRect>
      <LabeledRect
        x={20}
        y={210}
        width={240}
        height={50}
        className='svgCollectionBox'
      >
        Rectangle
      </LabeledRect>
      <LabeledCircle
        cx={340}
        cy={200}
        r={40}
        className='svgCollectionBoxNotRendered'
      >
        Hidden
      </LabeledCircle>
      <LabeledRect
        x={50}
        y={300}
        width={100}
        height={65}
        className='svgCollectionBoxNotRendered'
      >
        Hidden
      </LabeledRect>
    </BuildingBlocksSvgWrapper>
  );
}
