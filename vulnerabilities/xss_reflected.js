// inject <img src=x onerror=alert(0)> for flag

var express = require('express');
var DVNA = express();

DVNA.get('/', function(req, res) {
  var parsedUrl = url.parse(req.url, true);
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write('Unsanitized input: ' + parsedUrl.query.xss);
  res.end();
});

module.exports = {
  path: 'xss_reflected',
  server: DVNA
}
