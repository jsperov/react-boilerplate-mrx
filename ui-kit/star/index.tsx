import * as React from 'react';


import { Star } from './star';
import { StarBox } from './star.style';

type IProps = {
  repeat: any,
  color: any,
  activeColor: any,
  activeStar: any
}

type State = {
  rating: any
};

class StarRating extends React.Component<IProps, State> {
  static defaultProps = {
    repeat: 5,
    color: '#f9f',
    activeColor: '#e7eb07',
    activeStar: 0
  }

  state = {
    rating: 0
  };

  onClick = (rating: any) : void => this.setState({ rating })

  renderStar = (repeat: any) => [...new Array(repeat).fill(null)].map((item, rate) => 
    <Star
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
