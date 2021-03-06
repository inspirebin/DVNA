// Easy challenge to complete; player would provide a very long email; might want
// to time how long the process hangs for and award flag based on that
var express = require('express');
var DVNA = express();

DVNA.get('/', function(req, res) {
  var time = process.hrtime();
  // Unsafe regex
  var emailCapture = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var parsedUrl = url.parse(req.url, true);
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("Enter your email: " + parsedUrl.query.email);
  res.write("</br>Valid Email: " + emailCapture.test(parsedUrl.query.email));
  res.write("</br>Request Processing Time: " + process.hrtime(time));
  res.end();
});

module.exports = {
  path: 'regex_dos',
  server: DVNA
}
