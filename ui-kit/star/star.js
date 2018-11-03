import React from 'react';

const Star = ({
  rate,
  selected,
  color,
  activeColor,
  ...rest
}) => 
  <div
    className={`star ${selected ? 'active' : ''}`}
    style={
      {
        background: selected ? activeColor : color,
      }
    }
    {...rest}
  />

export { Star }