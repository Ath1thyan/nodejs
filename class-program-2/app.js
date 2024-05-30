var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')
app.use(cookieParser())

const pug = require('pug');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)

  })

app.listen(3333);