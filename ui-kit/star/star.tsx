import * as React from 'react';

const Star = ({
  rate,
  selected,
  ...rest
}) => 
  <div
    className={`star ${selected ? 'active' : ''}`}
    {...rest}
  />

export { Star }