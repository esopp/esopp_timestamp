var express = require('express');
var app = express();

app.get('/:DATE', function (req, res) {
  var date = req.params.DATE.split('%20')
  res.send(date);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});