import React from 'react';

export default function LabeledRect ({ children, className, x, y, width, height }) {
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