const express = require('express')
const expressHandlebars = require('express-handlebars')
const http = require('http')

var PORT = parseInt(process.env.PORT, 10) || 8000

var LINES = [
  'Test .',
  'Test ..',
  'Test ...',
  'Test ....'
]

var lineIndex = 0

var app = express()
app.engine('html', expressHandlebars())
app.set('view engine', 'html')
app.set('views', __dirname)
app.get('/', function (req, res) {
  var message = LINES[lineIndex]
  lineIndex += 1
  if (lineIndex >= LINES.length) {
    lineIndex = 0
  }

  res.render('index', {message: message})
})

http.Server(app).listen(PORT, function () {
  console.log('HTTP server listening on port %s', PORT)
})
