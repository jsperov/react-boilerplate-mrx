import React from 'react';

import { Star } from './star';
import { StarBox } from './star.style';

class StarRating extends React.Component {
  static defaultProps = {
    repeat: 5,
    color: '#f9f',
    activeColor: '#e7eb07',
    activeStar: 0
  }

  state = {
    rating: 0
  };

  onClick = rating => this.setState({ rating })

  renderStar = (repeat) => [...Array(repeat)].map((item, rate) => 
    <Star
      rate={rate}
      selected={this.state.rating > rate}
      onClick={() => this.onClick(rate + 1)}
      color={this.props.color}
      activeColor={this.props.activeColor}
    />
  );

  render() {
    const { repeat, color, activeColor } = this.props;
    const { rating } = this.state;

    return (
      <StarBox
        color={color}
        activeColor={activeColor}
      >
        Звезды {`${rating} из  ${repeat}`}
        {this.renderStar(repeat)}
      </StarBox>
    )
  }
}

export { StarRating }
