class TimedModal {
  constructor(message, type, timeout) {
    this.message = message
    this.type = type || 'success'
    this.timeout = timeout || 5000
  }

  display() {
    sweetAlert(this.options())
  }

  options() {
    return {
      title: this.title(),
      text: this.message,
      type: this.type,
      timer: this.timeout
    }
  }

  title() {
    switch (this.type) {
      case 'success':
        return 'Success!'
      case 'error':
        return 'Oops...'
    }
  }
}
