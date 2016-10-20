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
        {children}

        <rect
          x={4}
          y={4}
          width={272}
          height={272}
          className='svgOuterBox'
        />
      </g>
    </SvgWrapper>
  );
}
