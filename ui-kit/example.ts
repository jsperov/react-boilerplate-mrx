const fn = (url: string, keySet: string[]) => {
  const domain = url.slice(0, url.indexOf('?'));
  const params = url.slice(domain.length + 1);
  const match = new RegExp(`[${keySet.toString().replace(',', '').split('')}]`);

  const queryString = params
    .split('&')
    .filter(a => !match.test(a.split('=', 1).join()))
    .join('&')

  return `${domain}?${queryString}`
}

export { fn }