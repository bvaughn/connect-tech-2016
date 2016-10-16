import React from 'react';

export default function SvgWrapper ({ children, height, viewBoxHeight, viewBoxWidth, width }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio='xMinYMax meet'
    >
      {children}
    </svg>
  );
}

