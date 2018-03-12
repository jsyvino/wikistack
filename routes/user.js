

const express = require('express');
var user = express.Router();
const models = require('../models');
const Page = models.Page; 
const User = models.User; 


user.use(function(req, res, next) {
   
    next();
  });
  

  user.get('/', function(req, res, next) {
    User.findAll().then((users)=> {
      console.log("USERS HERE", users)
      res.render('users', {users: users})
    })
   });

   user.get('/:id', function(req, res, next) {
     Page.findAll({where: {authorId: req.params.id}}).then((pages) => {
      res.render('index', {cats: pages})
     })
   });



  module.exports = user;