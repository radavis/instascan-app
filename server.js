require('dotenv').config()

let path = require('path')
let express = require('express')
let bodyParser = require('body-parser')
let httpClient = require('request')

let launchPassURL = require(path.join(__dirname, 'src', 'launchPassURL'))
let ipFilter = require(path.join(__dirname, 'src', 'ipFilter'))

// setup
let server = express()
server.set('port', (process.env.PORT))
server.use(ipFilter)
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, 'public')))

// routes
server.get('/', (request, response) => {
  response.sendfile(path.join(__dirname, 'public', 'index.html' ))
})

server.post('/api/v2/attendance', (request, response) => {
  // relay request to LaunchPass API
  let url = `${launchPassURL}/api/v2/attendance`
  request.pipe(httpClient.post(url, { json: true, body: request.body }), { end: false })
    .pipe(response)
})

// start
server.listen(server.get('port'), (error) => {
  if (error) {
    console.log(error)
  }
  console.log(`==> 🌎  Listening on port ${server.get('port')}.`)
})
