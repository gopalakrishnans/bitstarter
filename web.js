var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var outByte = fs.readFileSync("index.html");
var outString = outByte.toString();

app.get('/', function(request, response) {
  response.send(outString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
