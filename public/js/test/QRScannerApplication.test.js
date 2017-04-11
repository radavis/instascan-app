describe('QRScannerApplication', () => {
  let videoElementId = 'video-preview'
  let app, videoElement, newCameraOperatorSpy, cameraOperatorSpy

  beforeEach(() => {
    // add video element to the page
    videoElement = document.createElement('video')
    videoElement.setAttribute('id', videoElementId)
    document.body.appendChild(videoElement)

    // initialize CameraOperator spy object
    cameraOperatorSpy = jasmine.createSpyObj('cameraOperator', ['start'])
    newCameraOperatorSpy = spyOn(QRScannerApplication.prototype, 'newCameraOperator')
      .and.returnValue(cameraOperatorSpy)
  })

  afterEach(() => {
    // remove video element from the page
    videoElement.parentElement.removeChild(videoElement)
  })

  describe('start()', () => {
    it('does not create a new CameraOperator when videoDisplayId is not present', () => {
      app = new QRScannerApplication('id-does-not-exist')
      app.start()
      expect(app.cameraOperator).toBeNull()
    })

    it('creates a new CameraOperator when videoDisplayId is present', () => {
      app = new QRScannerApplication(videoElementId)
      app.start()
      expect(newCameraOperatorSpy).toHaveBeenCalled()
      expect(app.cameraOperator).not.toBeNull()
    })

    it('calls start() on the cameraOperator object', () => {
      app = new QRScannerApplication(videoElementId)
      app.start()
      expect(cameraOperatorSpy.start).toHaveBeenCalled()
    })
  })
})
