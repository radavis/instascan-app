class QRScannerApp {
  constructor(videoDisplayId) {
    this.videoDisplayId = videoDisplayId
    this.videoDisplayElement = document.getElementById(this.videoDisplayId)
    this.cameraOperator = null
  }

  start() {
    if (this.videoDisplayElement) {
      this.cameraOperator = this.newCameraOperator()
      this.cameraOperator.start()
    } else {
      // do nothing
      // console.log('videoDisplayElement was not present.')
    }
  }

  newCameraOperator() {
    return new CameraOperator(this.videoDisplayElement, postObjectToAPI)
  }
}
