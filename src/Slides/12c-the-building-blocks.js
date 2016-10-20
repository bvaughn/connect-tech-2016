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
        <li>What about data that isn't linear (eg Pinterest layout, Gantt chart)?</li>
        <Step><li>Can we even window this type of data?</li></Step>
      </ul>

      <Step>
        <div>
          <h2>Collection</h2>

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
        Rendered
      </LabeledCircle>
      <LabeledRect
        x={135}
        y={105}
        width={100}
        height={80}
        className='svgCollectionBox'
      >
        Rendered
      </LabeledRect>
      <LabeledRect
        x={20}
        y={210}
        width={240}
        height={50}
        className='svgCollectionBox'
      >
        Rendered
      </LabeledRect>
      <LabeledRect
        x={155}
        y={20}
        width={140}
        height={50}
        className='svgCollectionBox'
      >
        Rendered
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
      <rect x={274} y={0} width={111} height={274} className='svgNotRenderedDimmer' />
      <rect x={0} y={274} width={385} height={111} className='svgNotRenderedDimmer' />
    </BuildingBlocksSvgWrapper>
  );
}
