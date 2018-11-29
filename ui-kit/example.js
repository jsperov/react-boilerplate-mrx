const fn = (url, arr) => {
  const domain = url.slice(0, url.indexOf('?'))
  const params = url.slice(domain.length + 1)

  return (domain + '?' + params)
    .split('&')
    .filter(a => a.slice('=')
    .indexOf(arr))
}

export { fn }