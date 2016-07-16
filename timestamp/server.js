var express = require('express');
var app = express();

app.get('/:DATE', function (req, res) {
  res.send(req.params.DATE);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});