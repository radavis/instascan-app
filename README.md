## Instascan App

Scan a QR code & post results to an API.

## Instructions

```no-highlight
$ git clone <this-repo>
$ cd instascan-app
$ npm install
$ heroku local web # or
$ npm start
```

Startup LaunchPass on port 3001.

Visit <http://localhost:5000/> and hold a QR code in front of the camera.

## Live Application

[Production](https://la-attendance.herokuapp.com)

## TODO

* [x] Filter requests by IP.
* [ ] Install instascan via NPM. Waiting on author to compile to ES5. [info](https://github.com/schmich/instascan/issues/42)
* [ ] Integrate into LaunchPass application
