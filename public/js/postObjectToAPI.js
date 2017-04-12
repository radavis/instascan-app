let postObjectToAPI = (content, objectType = 'scan', apiPath = '/api/v1/attendance') => {
  let dataObject = {}
  dataObject[objectType] = content
  console.log(dataObject)

  return fetch(apiPath, {
    method: 'POST',
    body: JSON.stringify(dataObject)
  })
  .then((response) => {
    if (response.status == 201) {
      new TimedModal('HTTP Status: 201 Created.').display()
      console.log(`POST request to ${apiPath} was successful.`)
    } else {
      new TimedModal('Something went wrong!', 'error').display()
      console.error(`POST request to ${apiPath} failed.`)
    }
  })
}
