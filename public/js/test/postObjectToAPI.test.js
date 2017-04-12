describe('postObjectToApi', () => {
  let response, data

  beforeEach(() => {
    data = 'radavis.bacs@gmail.com;radavis'
  })

  describe('a successful request', () => {
    beforeEach(() => {
      spyOn(console, 'log')

      response = new Response('Created', {
        status: 201,
        headers: {
          'Content-type': 'application/json'
        }
      })

      spyOn(window, 'fetch')
        .and.returnValue(Promise.resolve(response))
    })

    it('makes a fetch request', () => {
      postObjectToAPI(data)
      expect(window.fetch).toHaveBeenCalledWith('/api/v1/attendance', {
        method: 'POST',
        body: JSON.stringify({ scan: data })
      })
    })

    it('shows a successful message when response status is 201', (done) => {
      postObjectToAPI(data).then(() => {
        expect(console.log).toHaveBeenCalledWith('POST request to /api/v1/attendance was successful.')
        done()
      })
    })
  })

  describe('an unsuccessful request', () => {
    beforeEach(() => {
      spyOn(console, 'error')

      response = new Response('Unprocessable Entity', {
        status: 422,
        headers: {
          'Content-type': 'application/json'
        }
      })

      spyOn(window, 'fetch')
        .and.returnValue(Promise.resolve(response))
    })

    it('shows an error message with any other response.status', (done) => {
      postObjectToAPI(data).then(() => {
        expect(console.error).toHaveBeenCalledWith('POST request to /api/v1/attendance failed.')
        done()
      })
    })
  })
})
