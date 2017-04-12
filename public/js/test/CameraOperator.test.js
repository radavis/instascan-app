describe('CameraOperator', () => {
  var cameraOperator, videoElement, createScannerSpy

  beforeEach(() => {
    // add 'video#video-preview' element to the page
    videoElement = document.createElement('video')
    videoElement.setAttribute('id', 'video-preview')
    document.body.appendChild(videoElement)

    // create spies
    let scannerSpy = jasmine.createSpyObj('scanner', ['addListener', 'start'])
    createScannerSpy = spyOn(CameraOperator.prototype, 'createScanner')
      .and.returnValue(scannerSpy)
    let onScanEventHandlerSpy = jasmine.createSpy()

    // init subject under test
    cameraOperator = new CameraOperator(videoElement, onScanEventHandlerSpy)
  })

  afterEach(() => {
    // remove 'video#video-preview' element from the page
    videoElement.parentElement.removeChild(videoElement)
  })

  describe('new', () => {
    it('sets the videoDisplayElement', () => {
      expect(cameraOperator.videoDisplayElement).toEqual(videoElement)
    })

    it('sets the onScanEventHandler', () => {
      expect(cameraOperator.onScanEventHandler).not.toBeNull()
      expect(typeof cameraOperator.onScanEventHandler).toEqual('function')
    })

    it('initializes a new Instascan.Scanner object', () => {
      expect(createScannerSpy).toHaveBeenCalled()
      expect(typeof cameraOperator.scanner).toEqual('object')
    })
  })

  describe('start()', () => {
    beforeEach(() => {
      spyOn(cameraOperator, 'addScanEventListener')
      spyOn(cameraOperator, 'startScanning')
    })

    it('calls postToAPIOnScan()', () => {
      cameraOperator.start()
      expect(cameraOperator.addScanEventListener).toHaveBeenCalled()
    })

    it('calls startScanning()', () => {
      cameraOperator.start()
      expect(cameraOperator.startScanning).toHaveBeenCalled()
    })
  })

  describe('startScanning()', () => {
    xit('calls getCamera()')
    xit('calls this.scanner.start() when a camera is found')
    xit('logs an error when this.scanner.start() fails')
  })

  describe('getCamera()', () => {
    xit('calls InstascanCamera.getCameras()')
    xit('returns the first camera it finds')
    xit('logs an error message when no camera is found')
  })
})
