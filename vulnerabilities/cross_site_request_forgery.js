var express = require('express');
var DVNA = express();

DVNA.post('/users/1/delete', function(req, res){
  console.log('Account deleted succesfully');
  res.send('Account deleted succesfully');
})

var app = express();

app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('csrf', { title: 'Cross Site Request Forgery', message: 'Deleting in 3 seconds a user in another domain!'});
})

module.exports = {
  path: 'cross_site_request_forgery',
  server: DVNA,
  attacker: app,
}
