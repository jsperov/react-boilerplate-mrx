import * as React from 'react';

import { Star } from './star';
import { StarBox } from './star.style';

import { COLORS } from './const';

type Props = {
  repeat: number,
  rating: number,
  onClick(rating: number): void,
  color?: string,
  activeColor?: string,
  activeStar?: number,
  image?: string,
  label?: string,
  isLabel?: boolean
}

const StarRating: React.StatelessComponent<Props> = ({
  repeat,
  onClick,
  color=COLORS.YELLOW,
  activeColor=COLORS.ORANGE,
  isLabel=true,
  rating
}) => {

   const renderStar = (repeat: number) : JSX.Element[] => [...new Array(repeat).fill(null)].map((item, rate) => 
    <Star
      selected={rating > rate}
      onClick={() => onClick(rate + 1)}
    />
  );

  return (
    <StarBox
      color={color}
      activeColor={activeColor}
    >
      {isLabel && `Звезды ${rating} из ${repeat}`}
      {renderStar(repeat)}
    </StarBox>
  )
}

export { StarRating }
