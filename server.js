const { createServer } = require('http')
const next = require('next')
​
const app = next()
​
app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => app.renderToHTML(req, res, '/', {}))
})