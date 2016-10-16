import React from 'react';
import LabeledCircle from '../Components/LabeledCircle';
import LabeledRect from '../Components/LabeledRect';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';
import SvgWrapper from '../Components/SvgWrapper';
import './12-the-building-blocks.css';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>
        The building blocks: Grid & Collection
      </h1>

      <div className='Slides__BuildingBlocks'>
        <Step>
          <div className='Slides__BuildingBlocks__Block'>
            <h3>List</h3>
            <ListSvg />
          </div>
        </Step>

        <Step>
          <div className='Slides__BuildingBlocks__Block'>
            <h3>Table</h3>
            <TableSvg />
          </div>
        </Step>
      </div>

      <div className='Slides__BuildingBlocks'>
        <Step>
          <div className='Slides__BuildingBlocks__Block'>
            <h3>Grid</h3>
            <GridSvg />
          </div>
        </Step>

        <Step>
          <div className='Slides__BuildingBlocks__Block'>
            <h3>Collection</h3>
            <CollectionSvg />
          </div>
        </Step>
      </div>
    </Slide>
  </Stepper>
);

const GRID_BOX_OFFSETS = [10, 100, 190]

function StyledSvgWrapper ({ children, ...rest }) {
  return (
    <SvgWrapper
      {...rest}
      height='100%'
      width='100%'
      viewBoxHeight={280}
      viewBoxWidth={280}
    >
      <g>
        <rect
          x={0}
          y={0}
          width={280}
          height={280}
          className='svgOuterBox'
        />

        {children}
      </g>
    </SvgWrapper>
  );
}

function GridSvg (props) {
  return (
    <StyledSvgWrapper {...props}>
      {GRID_BOX_OFFSETS.map((xOffset) => (
        GRID_BOX_OFFSETS.map((yOffset) => (
          <LabeledRect
            key={`${xOffset}${yOffset}`}
            x={xOffset}
            y={yOffset}
            width={80}
            height={80}
            className='svgGridBox'
          >
            Cell
         </LabeledRect>
        ))
      ))}
    </StyledSvgWrapper>
  );
}

const LIST_ROW_OFFSETS = [10, 64, 118, 172, 226]

function ListSvg (props) {
  return (
    <StyledSvgWrapper {...props}>
      {LIST_ROW_OFFSETS.map((yOffset) => (
        <LabeledRect
          key={yOffset}
          x={10}
          y={yOffset}
          width={260}
          height={44}
          className='svgListRow'
        >
          Row
        </LabeledRect>
      ))}
    </StyledSvgWrapper>
  );
}

const TABLE_COLUMN_OFFSETS = [10, 145]

function TableSvg (props) {
  return (
    <StyledSvgWrapper {...props}>
      {LIST_ROW_OFFSETS.map((yOffset, index) => (
        TABLE_COLUMN_OFFSETS.map((xOffset) => (
          <LabeledRect
            key={`${xOffset}${yOffset}`}
            x={xOffset}
            y={yOffset}
            width={125}
            height={44}
            className={index === 0 ? 'svgTableHeader' : 'svgTableColumn'}
          >
            {index === 0 ? 'Header' : 'Column'}
          </LabeledRect>
       ))
      ))}
    </StyledSvgWrapper>
  );
}

function CollectionSvg (props) {
  return (
    <StyledSvgWrapper {...props}>
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
    </StyledSvgWrapper>
  );
}
