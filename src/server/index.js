const express = require('express')
import createApp from '../app'
import { renderToString } from '@vue/server-renderer'
import createRouter from '../router'
import { createMemoryHistory } from 'vue-router'

let server  = express()

server.use(express.static('build'))

server.get('/*', async (req, res) => {
  let app  = createApp()
  let router = createRouter(createMemoryHistory())
  app.use(router)
  await router.push(req.url || '/')
  await router.isReady()
  let appString = await renderToString(app)
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id='app'>
        ${appString}
      </div>
      <script src="/client/client_bundle.js"></script>
    </body>
    </html>`
  )
})

server.listen(3000, () => {
  console.log("start node server on 3000")
})