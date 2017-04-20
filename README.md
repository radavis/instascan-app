## Instascan Demo

Scan a QR code & post results to an API.

## Instructions

```no-highlight
$ git clone <this-repo>
$ cd instascan-demo
$ npm install
$ heroku local web  # loads .env for you
```

Visit <http://localhost:5000/> and hold a QR code in front of the camera.

## TODO

* [x] Filter requests by IP.
* [ ] Install instascan via NPM. Waiting on author to compile to ES5. [info](https://github.com/schmich/instascan/issues/42)
* [ ] Integrate into LaunchPass application
