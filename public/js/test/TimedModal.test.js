describe('TimedModal', () => {
  let timedModal, options

  beforeEach(() => {
    timedModal = new TimedModal('Awesome Show. Great Job.')
    options = timedModal.options()
  })

  describe('new', () => {
    it('sets the message to the first argument', () => {
      expect(timedModal.message).toEqual('Awesome Show. Great Job.')
    })

    it('defaults the "type" property to "success"', () => {
      expect(timedModal.type).toEqual('success')
    })

    it('defaults the "timeout" property to 5000', () => {
      expect(timedModal.timeout).toEqual(5000)
    })
  })

  describe('display()', () => {
    beforeEach(() => {
      spyOn(window, 'sweetAlert')
      timedModal.display()
    })

    it('calls sweetAlert with the options as an argument', () => {
      expect(sweetAlert).toHaveBeenCalledWith(timedModal.options())
    })
  })

  describe('options()', () => {
    it('returns an object', () => {
      expect(options).toBeDefined()
      expect(typeof(options)).toEqual('object')
    })

    it('includes the "title" property', () => {
      expect(options.title).toEqual('Success!')
    })

    it('includes the "text" property', () => {
      expect(options.text).toEqual('Awesome Show. Great Job.')
    })

    it('includes the "type" property', () => {
      expect(options.type).toEqual('success')
    })

    it('includes the "timer" property', () => {
      expect(options.timer).toEqual(5000)
    })
  })

  describe('title()', () => {
    it('returns "Success!" if the type is "success"', () => {
      timedModal = new TimedModal('Awesome Show. Great Job.', 'success')
      expect(timedModal.title()).toEqual('Success!')
    })

    it('returns "Oops..." if the type is "error"', () => {
      timedModal = new TimedModal('Ya blew it.', 'error')
      expect(timedModal.title()).toEqual('Oops...')
    })
  })
})
