let path = require('path')
let express = require('express')
let server = express()

let ipFilter = ((request, response, next) => {
  allowedIps = process.env.VALID_REQUEST_IPS.split(' ')
  requestIp = request.headers['x-forwarded-for'] || request.connection.remoteAddress

  if (!allowedIps.includes(requestIp)) {
    response.status(403).send('Forbidden')
  } else {
    next()
  }
})

server.set('port', (process.env.PORT || 5000))
server.use(ipFilter)
server.use(express.static(path.join(__dirname, 'public')))

// routes
server.get('/', (request, response) => {
  response.sendfile(path.join(__dirname, 'public', 'index.html' ))
})

server.post('/api/v1/attendance', (request, response) => {
  // always respond positively
  response.status(201).send('Created')
})

// start
server.listen(server.get('port'), (error) => {
  if (error) {
    console.log(error)
  }
  console.log(`==> 🌎  Listening on port ${server.get('port')}.`)
})
