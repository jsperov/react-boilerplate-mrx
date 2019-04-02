const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handler = app.getRequestHandler();
const cache = require('lru-cache'); // for using least-recently-used based caching

const ssrCache = new cache({
  max: 20, // not more than 20 results will be cached
  maxAge: 1000 * 60 * 5, // 5 mins
});

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = req.url;

  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  try {
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    ssrCache.set(key, html);

    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => renderAndCache(req, res, '/main', {}))

  server.get('*', (req, res) => handler(req, res))

  server.listen(process.env.PORT || 3000, err => {
    if (err) throw err

    console.log(`server running - http://localhost:${port || 3000}`)
  })
})