const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
// const app = next({ dev });
const handler = app.getRequestHandler();
​
app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => app.renderToHTML(req, res, '/', {}))

  server.get('*', (req, res) => handler(req, res))

  server.listen(process.env.PORT || 3000, err => {
    if (err) throw err

    console.log(`server running - http://localhost:${port || 3000}`)
  })
})