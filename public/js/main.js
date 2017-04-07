let displaySuccessModal = (message, timeout) => {
  sweetAlert({
    title: 'Success!',
    text: message,
    type: 'success',
    timer: timeout || 5000
  })
}

let displayFailureModal = (message, timeout) => {
  sweetAlert({
    title: 'Oops...',
    text: message,
    type: 'error',
    timer: timeout || 5000
  })
}

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
      displaySuccessModal('Thanks for scanning in.')
    } else {
      displayFailureModal('Something went wrong!')
    }
  })
})

// find a camera
Instascan.Camera.getCameras()
.then((cameras) => {
  if (cameras.length > 0) {
    return cameras[0]
  } else {
    displayFailureModal('Camera not found.', 5 * 60 * 1000)
  }
})
.then((camera) => {
  scanner.start(camera)  // start scanning for QR codes
})
.catch((e) => {
  console.error(e)
})
