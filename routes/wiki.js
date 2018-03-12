
var express = require('express');
var wiki = express.Router();


wiki.use(function(req, res, next) {
   
    next();
  });
  
  
wiki.get('/', function(req, res, next) {
    res.send('hello /');
  });

wiki.get('/add', function(req, res, next) {
    res.send('hello add');
  });

wiki.post('/', function(req, res, next){
    res.send('post request');
  });


module.exports = wiki;
