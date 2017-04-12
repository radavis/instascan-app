## QR Scanner App

* Written in vanilla JS
* Uses two libraries:
  - SweetAlert
  - Instascan
* Testing Objects instantiating Objects isn't fun.
  - how do you mock `new ClassName()` and returning a spy object?
  - best solution: isolate new object creation to a method, stub it, check that
  it was called.
* Could be a standalone app.
* Could be a part of LaunchPass.
* How do we secure it?

## Solutions

* Roll into react app in LaunchPass
* Future story: validate requests based on IP (only LaunchAcademy locations)
