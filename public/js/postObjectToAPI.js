let postObjectToAPI = (content, objectType, apiPath) => {
  objectType = objectType || 'scan'
  apiPath = apiPath || '/api/v2/attendance'

  let dataObject = {}
  dataObject[objectType] = content
  console.log(dataObject)

  return fetch(apiPath, {
    method: 'POST',
    body: JSON.stringify(dataObject),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
  .then((response) => {
    console.log(response)
    if (response.status == 201) {
      new TimedModal('HTTP Status: 201 Created.').display()
      console.log(`POST request to ${apiPath} was successful.`)
    } else {
      new TimedModal('Something went wrong!', 'error').display()
      console.error(`POST request to ${apiPath} failed.`)
    }
  })
}
