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

const LIST_ROW_OFFSETS = [10, 64, 118, 172, 226, 290, 344]

export function ListSvg (props) {
  return (
    <BuildingBlocksSvgWrapper
      {...props}
      height={398}
      viewBoxHeight={398}
      viewBoxWidth={280}
      width={280}
    >
      {LIST_ROW_OFFSETS.map((yOffset, index) => (
        <LabeledRect
          key={yOffset}
          x={10}
          y={yOffset}
          width={260}
          height={44}
          className={classnames({
            svgListRow: index < 5,
            svgListRowNotRendered: index >= 5,
            svgOddRow: index < 5 && index % 2 === 0
          })}
        >
          {index < 5
            ? 'Rendered'
            : 'Hidden'
          }
        </LabeledRect>
      ))}
    </BuildingBlocksSvgWrapper>
  );
}

const TABLE_COLUMN_OFFSETS = [10, 145]

export function TableSvg (props) {
  return (
    <BuildingBlocksSvgWrapper
      {...props}
      height={398}
      viewBoxHeight={398}
      viewBoxWidth={280}
      width={280}
    >
      {LIST_ROW_OFFSETS.map((yOffset, index) => (
        TABLE_COLUMN_OFFSETS.map((xOffset) => (
          <LabeledRect
            key={`${xOffset}${yOffset}`}
            x={xOffset}
            y={yOffset}
            width={125}
            height={44}
            className={classnames({
              svgTableHeader: index === 0,
              svgTableColumn: index < 5,
              svgTableColumnNotRendered: index >= 5,
              svgOddRow: index > 0 && index < 5 && index % 2 === 0
            })}
          >
            {index === 0 && 'Header'}
            {index > 0 && index < 5 && 'Column'}
            {index >= 5 && 'Hidden'}
          </LabeledRect>
       ))
      ))}
    </BuildingBlocksSvgWrapper>
  );
}
