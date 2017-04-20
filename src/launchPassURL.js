let launchPassURL

switch(process.env.NODE_ENV) {
  case 'production':
    launchPassURL = 'https://launchpass.launchacademy.com'
    break
  case 'staging':
    launchPassURL = 'https://launch-pass-staging.herokuapp.com'
    break
  default:
    launchPassURL = 'http://localhost:3001'
}

module.exports = launchPassURL
