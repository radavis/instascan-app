class CameraOperator {
  constructor(videoDisplayElement, apiPath) {
    this.videoDisplayElement = videoDisplayElement
    this.apiPath = apiPath || '/api/v1/attendance'
    this.scanner = new Instascan.Scanner({ video: videoDisplayElement })
  }

  start() {
    this.addScanEventListener()
    this.startScanning()
  }

  addScanEventListener() {
    // scan event fires when a QR code is captured by the camera
    this.scanner.addListener('scan', (content) => {
      let dataObject = { scan: content }
      console.log(dataObject)

      this.postDataToAPI(dataObject)
      .then((response) => {
        if (response.status == 201) {
          new TimedModal('Thanks for scanning in.').display()
        } else {
          new TimedModal('Something went wrong!', 'error').display()
        }
      })
    })
  }

  postDataToAPI(dataObject) {
    return fetch(this.apiPath, {
      method: 'POST',
      body: JSON.stringify(dataObject)
    })
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
        new TimedModal('Camera not found.', 'error', 5 * 60 * 1000).display()
      }
    })
  }
}
