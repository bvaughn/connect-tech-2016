import React from 'react';
import SvgWrapper from './SvgWrapper';

export default function BuildingBlocksSvgWrapper ({ children, ...rest }) {
  return (
    <SvgWrapper
      height='100%'
      width='100%'
      viewBoxHeight={280}
      viewBoxWidth={280}
      {...rest}
    >
      <g>
        <rect
          x={1}
          y={1}
          width={278}
          height={278}
          className='svgOuterBox'
        />

        {children}
      </g>
    </SvgWrapper>
  );
}
