let express = require('express')
let server = express()
let port = 3000

server.use(express.static('public'))

server.post('/api/v1/attendance', (request, response) => {
  // always respond positively
  response.status(201).send('Created')
})

server.listen(port, '0.0.0.0', (error) => {
  if (error) {
    console.log(error)
  }

  console.info(`==> 🌎 Listening on port ${port}. Open http://0.0.0.0:${port}/ in your browser.`)
})
