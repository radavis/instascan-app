describe('CameraOperator', () => {
  let cameraOperator, videoElement

  beforeEach(() => {
    videoElement = document.createElement('video')
    videoElement.setAttribute('id', 'video-preview')
    document.body.appendChild(videoElement)

    cameraOperator = new CameraOperator(videoElement)
  })

  afterEach(() => {
    videoElement.parentElement.removeChild(videoElement)
  })

  describe('new', () => {
    it('sets the videoDisplayElement', () => {
      expect(cameraOperator.videoDisplayElement).toEqual(videoElement)
    })

    it('defaults the apiPath property to "/api/v1/attendance"', () => {
      expect(cameraOperator.apiPath).toEqual('/api/v1/attendance')
    })

    it('initializes a new Instascan.Scanner object', () => {
      expect(cameraOperator.scanner).toBeDefined()
    })
  })

  describe('start()', () => {
    xit('calls postToAPIOnScan()')
    xit('calls startScanning()')
  })

  describe('postToAPIOnScan()', () => {
    xit('adds an event listener to "scan" events')
    xit('makes a POST request to the apiPath')
    xit('creates a new TimedModal with a successful message with a 201 response')
    xit('creates a new TimedModal error message with any other response')
  })

  describe('startScanning()', () => {
    xit('calls "start" on the scanner object')
    xit('creates a new TimedModal error message when a camera is not found')
  })
})
