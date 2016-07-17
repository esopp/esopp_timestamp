var express = require('express');
var app = express();
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

app.get('/:DATE', function (req, res) {
  var date = new Date((req.params.DATE.split(" ").length == 3 ? req.params.DATE : parseInt(req.params.DATE)*1000))
  var fmt = {};
  if (date.toString()  != 'Invalid Date') 
  fmt = { 'unix' : date.getTime()/1000, 'natural' : month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() }
  else fmt = {'unix' : null, 'natural' : null}
  res.end(JSON.stringify(fmt));
  
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});