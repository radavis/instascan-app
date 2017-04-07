class Modal {
  constructor(message, type, timeout) {
    this.message = message
    this.type = type
    this.timeout = timeout || 5000
  }

  display() {
    sweetAlert(this.options())
  }

  title() {
    switch (this.type) {
      case 'success':
        return 'Success!'
      case 'error':
        return 'Oops...'
      default:
        return 'You\'ve done it now...'
    }
  }

  options() {
    return {
      title: this.title(),
      text: this.message,
      type: this.type,
      timer: this.timeout
    }
  }
}
