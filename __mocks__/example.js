const mocker = require('mocker-data-generator').default;

const findKey = [];

const randomQueryParams = (key, value) => {
  const length = Math.floor(Math.random() * 3);

  findKey.push([key]);

  return [...new Array(length)].map((el, i, arr) => i < arr.length-1
    ? `${key}=${value}&`
    : `${key}=${value}`
  ).join('')
}

const url = {
  url: {
    function: function() {
        return (
            `${this.faker.internet.url()}?${randomQueryParams(
              this.faker.internet.domainWord(),
              this.faker.internet.userName()
            )}`
        )
    }
  }
}

export const urls = mocker().schema('url', url, 10).build();
export { findKey };
