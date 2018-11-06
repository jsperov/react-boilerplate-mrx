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
  <React.Fragment>
    <div
      className={`star ${selected ? 'active' : ''}`}
      {...rest}
    />
  </React.Fragment>

export { Star }