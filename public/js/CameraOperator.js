class CameraOperator {
  constructor(videoDisplayElement, apiPath) {
    this.videoDisplayElement = videoDisplayElement
    this.apiPath = apiPath || '/api/v1/attendance'
    this.scanner = new Instascan.Scanner({ video: videoDisplayElement })
  }

  start() {
    this.postToAPIOnScan()
    this.startScanning()
  }

  postToAPIOnScan() {
    this.scanner.addListener('scan', (content) => {
      console.log({ scan: content })

      // post content to server
      fetch(this.apiPath, {
        method: 'POST',
        body: JSON.stringify({ scan: content })
      })
      .then((response) => {
        if (response.status == 201) {
          new TimedModal('Thanks for scanning in.').display()
        } else {
          new TimedModal('Something went wrong!', 'error').display()
        }
      })
    })
  }

  startScanning() {
    Instascan.Camera.getCameras()
    .then((cameras) => {
      if (cameras.length > 0) {
        return cameras[0]
      } else {
        new TimedModal('Camera not found.', 'error', 5 * 60 * 1000).display()
      }
    })
    .then((camera) => {
      this.scanner.start(camera)  // start scanning for QR codes
    })
    .catch((e) => {
      console.error(e)
    })
  }
}
