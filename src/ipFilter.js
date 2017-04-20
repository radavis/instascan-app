let ipFilter = ((request, response, next) => {
  allowedIps = process.env.VALID_REQUEST_IPS.split(' ')
  requestIp = request.headers['x-forwarded-for'] || request.connection.remoteAddress

  if (!allowedIps.includes(requestIp)) {
    response.status(403).send('Forbidden')
  } else {
    next()
  }
})

module.exports = ipFilter
