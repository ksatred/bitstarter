//var express = require('express');
//var fs = require('fs');
//var testdata = fs.readFileSync('Test.txt');
//console.log(testdata);
//var buf = new Buffer('test');
//var buf1 = buf.toString();
//console.log(buf1);
//console.log(buf);

var express = require('express');
var fs = require('fs');
var indexfilename = "index.html";
var app = express.createServer(express.logger());
var filedata = new Buffer(fs.readFileSync(indexfilename));
app.get('/', function(request, response) {
  response.send(filedata.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
