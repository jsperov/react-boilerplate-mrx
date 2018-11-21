import {shallow} from 'enzyme';
import {StarRating} from '../ui-kit/star';
import toJson from 'enzyme-to-json';

describe('StarBox', () => {
  it('should render correctly', () => {
    const output = shallow(
      <StarRating
        repeat={5}
        rating={1}
        onClick={() => this.setState({ rating: 5})}
      />
    )
    
    expect(toJson(output)).toMatchSnapshot();
  });
});