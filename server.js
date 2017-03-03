var express = require('express')

var app = express()

app.use(express.static('public'))

app.listen(3002, function () {
  console.log('Server is running up on 3002 port!')
})
