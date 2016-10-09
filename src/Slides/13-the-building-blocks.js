import React from 'react';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import './13-the-building-blocks.css';

export default () => (
  <Stepper numSteps={5}>
    {(index) => (
      <Slide>
        <h1>
          The building blocks: Grid & Collection
        </h1>

        <div className='Slides__BuildingBlocks'>
          {index >= 1 && (
            <div className='Slides__BuildingBlocks__Block'>
              <h3>Grid</h3>
              <GridSvg />
            </div>
          )}

          {index >= 2 && (
            <div className='Slides__BuildingBlocks__Block'>
              <h3>List</h3>
              <ListSvg />
            </div>
          )}
        </div>

        <div className='Slides__BuildingBlocks'>
          {index >= 3 && (
            <div className='Slides__BuildingBlocks__Block'>
              <h3>Table</h3>
              <TableSvg />
            </div>
          )}

          {index >= 4 && (
            <div className='Slides__BuildingBlocks__Block'>
              <h3>Collection</h3>
              <CollectionSvg />
            </div>
          )}
        </div>
      </Slide>
    )}
  </Stepper>
);

function SvgWrapper ({ children, size = '100%' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 280 280'
      preserveAspectRatio='xMinYMax meet'
    >
      <rect
        x={0}
        y={0}
        width={280}
        height={280}
        className='svgOuterBox'
      />

      {children}
    </svg>
  );
}

function LabeledCircle ({ children, className, cx, cy, r }) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        className={className}
      />
      <text
        x={cx}
        y={cy}
        textAnchor='middle'
        alignmentBaseline='central'
      >
        {children}
      </text>
    </g>
  );
}

function LabeledRect ({ children, className, x, y, width, height }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        className={className}
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor='middle'
        alignmentBaseline='central'
      >
        {children}
      </text>
    </g>
  );
}

const GRID_BOX_OFFSETS = [10, 100, 190]

function GridSvg (props) {
  return (
    <SvgWrapper {...props}>
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
    </SvgWrapper>
  );
}

const LIST_ROW_OFFSETS = [10, 64, 118, 172, 226]

function ListSvg (props) {
  return (
    <SvgWrapper {...props}>
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
    </SvgWrapper>
  );
}

const TABLE_COLUMN_OFFSETS = [10, 145]

function TableSvg (props) {
  return (
    <SvgWrapper {...props}>
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
    </SvgWrapper>
  );
}

function CollectionSvg (props) {
  return (
    <SvgWrapper {...props}>
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
    </SvgWrapper>
  );
}
