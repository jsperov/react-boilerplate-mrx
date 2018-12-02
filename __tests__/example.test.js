import {fn} from '../ui-kit/example';
import {urls, findKey} from '../__mocks__/example';

it('testing fn function', () => (
  urls.then(
    ({ url }) => url.forEach(({ url }, i) => expect(typeof fn(url, findKey[i])).toBe('string'))
  )
))
