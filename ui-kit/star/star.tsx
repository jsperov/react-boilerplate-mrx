import * as React from 'react';

type Props = {
  selected: boolean,
  onClick?: () => void,
}

const Star: React.SFC<Props> = ({
  selected=0,
  ...rest
}) => 
  <React.Fragment>
    <div
      className={`star ${selected ? 'active' : ''}`}
      {...rest}
    />
  </React.Fragment>

export { Star }