describe('QRScannerApplication', () => {
  let app

  describe('start()', () => {
    it('does not create a CameraOperator when videoDisplayId is not present', () => {
      app = new QRScannerApplication('id-does-not-exist')
      app.start()
      expect(app.cameraOperator).toBeNull()
    })

    it('does creates a CameraOperator when videoDisplayId is present', () => {
      document.body.innerHTML += '<video id="video-preview"></video>'
      app = new QRScannerApplication('video-preview')
      app.start()
      expect(app.cameraOperator).not.toBeNull()
    })
  })
})
