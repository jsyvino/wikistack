
const express = require('express');
const user = require('./user.js');
const wiki = require('./wiki.js');
var router = express.Router();
const models = require('../models')
const Page = models.Page; 
const User = models.User; 



router.use(function(req, res, next) {
   
    next();
  });
  
  
router.use('/wiki', wiki);
router.use('/users', user);


router.get('/', function (req, res){
  Page.findAll().then((pages1) =>{
    res.render('index', {cats: pages1})
  })
  // res.render('index.html')
})




module.exports = router;
