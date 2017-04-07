class QRScannerApplication {
  constructor(videoDisplayId) {
    this.videoDisplayId = videoDisplayId
    this.videoDisplayElement = document.getElementById(this.videoDisplayId)
    this.cameraOperator = null
  }

  start() {
    if (this.videoDisplayElement) {
      this.cameraOperator = new CameraOperator(this.videoDisplayElement)
      this.cameraOperator.start()
    } else {
      // console.log('videoDisplayDiv was not present.')
    }
  }
}
