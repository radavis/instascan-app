describe('QRScannerApplication', () => {
  let app

  describe('start()', () => {
    it('does not create a CameraOperator when videoDisplayId is not present', () => {
      app = new QRScannerApplication('id-does-not-exist')
      app.start()
      expect(app.cameraOperator).toBeNull()
    })

    it('creates a CameraOperator when videoDisplayId is present', () => {
      videoElement = document.createElement('video')
      videoElement.setAttribute('id', 'video-preview')
      document.body.appendChild(videoElement)

      app = new QRScannerApplication('video-preview')
      app.start()

      expect(app.cameraOperator).not.toBeNull()

      // clean up
      videoElement.parentElement.removeChild(videoElement)
      // todo - prevent new CameraOperator(this.videoDisplayElement) from actually being called
    })
  })
})
