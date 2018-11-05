import * as React from 'react';

type Props = {
  selected: boolean,
  color: string,
  activeColor: string
  onClick?: () => void,
}

const Star: React.SFC<Props> = ({
  selected,
  ...rest
}) => 
  <div
    className={`star ${selected ? 'active' : ''}`}
    {...rest}
  />

export { Star }