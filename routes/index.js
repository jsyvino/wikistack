
const express = require('express');
const user = require('./user.js');
const wiki = require('./wiki.js');
var router = express.Router();



router.use(function(req, res, next) {
   
    next();
  });
  
  
router.use('/wiki', wiki);
router.use('/user', user);


router.get('/', function(req, res, next) {
   
  });




module.exports = router;
