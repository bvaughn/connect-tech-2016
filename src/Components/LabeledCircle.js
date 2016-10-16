import React from 'react';

export default function LabeledCircle ({ children, className, cx, cy, r }) {
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