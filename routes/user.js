

const express = require('express');
var user = express.Router();


user.use(function(req, res, next) {
   
    next();
  });
  
  
user.get('/users', function(req, res, next) {
   
  });



  module.exports = user;