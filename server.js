require('dotenv').config()

let bodyParser = require('body-parser')
let path = require('path')
let express = require('express')

let launchPassURL = require(path.join(__dirname, 'src', 'launchPassURL'))
let ipFilter = require(path.join(__dirname, 'src', 'ipFilter'))

// setup
let server = express()
server.set('port', (process.env.PORT || 5000))
server.use(ipFilter)
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, 'public')))

// routes
server.get('/', (request, response) => {
  response.sendfile(path.join(__dirname, 'public', 'index.html' ))
})

server.post('/api/v1/attendance', (request, response) => {
  // let url = `${launchPassURL}/api/v1/attendance`
  console.log(request.body)
  response.status(201).send('Created')
})

// start
server.listen(server.get('port'), (error) => {
  if (error) {
    console.log(error)
  }
  console.log(`==> 🌎  Listening on port ${server.get('port')}.`)
})
