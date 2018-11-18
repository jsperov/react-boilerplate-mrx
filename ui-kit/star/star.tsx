import * as React from 'react';

type Props = {
  selected: boolean,
  onClick?: () => void,
  image?: string,
  imageActive?: string
}

const Star: React.SFC<Props> = ({
  selected=0,
  image,
  ...rest
}) => {
  const determineClass = image ? 'star--image' : '';
  
  return (
    <React.Fragment>
      <div
        className={`star ${determineClass} ${selected ? 'active' : ''}`}
        {...rest}
      />
    </React.Fragment>
  )
}

export { Star }