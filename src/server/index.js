const express = require('express')
import createApp from '../app'
import { renderToString } from '@vue/server-renderer'

let server  = express()

server.get('/', async (req, res) => {
  let app  = createApp()
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
    </body>
    </html>`
  )
})

server.listen(3000, () => {
  console.log("start node server on 3000")
})