var http = require('http');
var express = require('express');
var path = require('path');

var app = express();

app.get('/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'bundle.js'));
});

app.get('/main.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'main.css'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

http.createServer(app).listen(3000);
console.log('Listening on port 3000');