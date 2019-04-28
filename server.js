const sslRedirect = require('heroku-ssl-redirect')
const history = require('connect-history-api-fallback')
const express = require('express')
const path = require('path')
const port = process.env.PORT || 9100
const app = express()
app.use(sslRedirect())
app.use(history())
app.use(express.static(path.join(__dirname, 'dist')))
app.listen(port)
app.get('*', function (req, res, next) {
  req.headers.host.slice(0, 3) !== 'www'
    ? res.redirect(301, 'https://www.' + req.headers.host + req.url)
    : next()
})
console.log('Express server is running on :  ' + port)
