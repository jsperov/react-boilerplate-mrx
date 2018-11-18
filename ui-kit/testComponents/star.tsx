import * as React from 'react';

import { StarRating } from '../star';

import * as imageStar from './star.png';

class App extends React.Component {
  state = {
    rating: 0
  }

  onClick = (rating: number) : void => this.setState({ rating })

  render() {
    const { rating } = this.state

    return(
      <StarRating
        repeat={5}
        rating={rating}
        onClick={this.onClick}
        image={imageStar}
      />
    ) 
  }
}

export { App }
