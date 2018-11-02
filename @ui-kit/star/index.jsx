import React from 'react';

import { Star } from './star'
import './star.css';

class StarRating extends React.Component {
  static defaultProps = {
    repeat: 5,
    color: '#e7eb078a',
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
    const { repeat } = this.props;
    const { rating } = this.state;

    return (
      <React.Fragment>
        Звезды {`${rating} из  ${repeat}`}
        {this.renderStar(repeat)}
      </React.Fragment>
    )
  }
}

export { StarRating }
