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

      <div className='Slides__BuildingBlocks'>
        <Step>
          <div className='Slides__BuildingBlocks__Block'>
            <h2>List</h2>
            <ListSvg />
          </div>
        </Step>
        <Step>
          <div className='Slides__BuildingBlocks__Block'>
            <h2>Table</h2>
            <TableSvg />
          </div>
        </Step>
      </div>
    </Slide>
  </Stepper>
);

const LIST_ROW_OFFSETS = [10, 60, 110, 160, 210, 260, 310, 360]

export function ListSvg (props) {
  return (
    <BuildingBlocksSvgWrapper
      {...props}
      height={405}
      viewBoxHeight={405}
      viewBoxWidth={280}
      width={280}
    >
      {LIST_ROW_OFFSETS.map((yOffset, index) => (
        <LabeledRect
          key={yOffset}
          x={10}
          y={yOffset}
          width={260}
          height={45}
          className={classnames({
            svgListRow: index < 6,
            svgListRowNotRendered: index >= 6
          })}
        >
          {index < 6
            ? 'Row'
            : 'Hidden'
          }
        </LabeledRect>
      ))}
      <rect x={0} y={274} width={280} height={131} className='svgNotRenderedDimmer' />
    </BuildingBlocksSvgWrapper>
  );
}

const TABLE_COLUMN_TUPLES = [[10, 128], [143, 127]]

export function TableSvg (props) {
  return (
    <BuildingBlocksSvgWrapper
      {...props}
      height={405}
      viewBoxHeight={405}
      viewBoxWidth={280}
      width={280}
    >
      {LIST_ROW_OFFSETS.map((yOffset, index) => (
        TABLE_COLUMN_TUPLES.map(([xOffset, width]) => (
          <LabeledRect
            key={`${xOffset}${yOffset}`}
            x={xOffset}
            y={yOffset}
            width={width}
            height={45}
            className={classnames({
              svgTableHeader: index === 0,
              svgTableColumn: index < 6,
              svgTableColumnNotRendered: index >= 6
            })}
          >
            {index === 0 && 'Header'}
            {index > 0 && index < 6 && 'Column'}
            {index >= 6 && 'Hidden'}
          </LabeledRect>
       ))
      ))}
      <rect x={0} y={274} width={280} height={131} className='svgNotRenderedDimmer' />
    </BuildingBlocksSvgWrapper>
  );
}
