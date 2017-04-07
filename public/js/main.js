let videoPreviewDiv = document.getElementById('video-preview')
let scanner = new Instascan.Scanner({ video: videoPreviewDiv })

// add 'scan' event listener
scanner.addListener('scan', (content) => {
  // post content to server
  fetch('/api/v1/attendance', {
    method: 'POST',
    body: JSON.stringify({ scan: content })
  })
  .then((response) => {
    if (response.status == 201) {
      new Modal('Thanks for scanning in.', 'success').display()
    } else {
      new Modal('Something went wrong!', 'error').display()
    }
  })
})

// find a camera
Instascan.Camera.getCameras()
.then((cameras) => {
  if (cameras.length > 0) {
    return cameras[0]
  } else {
    new Modal('Camera not found.', 'error', 5 * 60 * 1000).display()
  }
})
.then((camera) => {
  scanner.start(camera)  // start scanning for QR codes
})
.catch((e) => {
  console.error(e)
})
