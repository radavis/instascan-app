class CameraOperator {
  constructor(videoDisplayElement, onScanEventHandler) {
    this.videoDisplayElement = videoDisplayElement
    this.onScanEventHandler = onScanEventHandler
    this.scanner = this.createScanner()
  }

  createScanner() {
    return new Instascan.Scanner({ video: this.videoDisplayElement })
  }

  start() {
    this.addScanEventListener()
    this.startScanning()
  }

  addScanEventListener() {
    // scan event fires when a QR code is captured by the camera
    this.scanner.addListener('scan', this.onScanEventHandler)
  }

  startScanning() {
    this.getCamera()
    .then((camera) => {
      this.scanner.start(camera)  // start scanning for QR codes
    })
    .catch((e) => {
      console.error(e)
    })
  }

  getCamera() {
    return Instascan.Camera.getCameras()
    .then((cameras) => {
      if (cameras.length > 0) {
        return cameras[0]
      } else {
        // new TimedModal('Camera not found.', 'error', 5 * 60 * 1000).display()
        console.error('Camera not found.')
      }
    })
  }
}
