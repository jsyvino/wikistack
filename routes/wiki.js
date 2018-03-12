
var express = require('express');
var wiki = express.Router();
const models = require('../models');
const Page = models.Page; 
const User = models.User; 



wiki.use(function(req, res, next) {
   
    next();
  });
  
  
wiki.get('/', function(req, res, next) {
    res.redirect('/');
  });

wiki.get('/add', function(req, res, next) {
  res.render("addpage");
  });

// wiki.post('/', function(req, res, next){
//   res.json(req.body);
//   });

wiki.get('/:title', (req, res, next) =>{
    Page.findOne({where: {urlTitle: req.params.title}}).then((page)=>{ 
    res.render('wikipage', { urlTitle: page.urlTitle, content: page.content});
    })
});
  
  wiki.post('/', function (req, res, next) {
  
    // STUDENT ASSIGNMENT:
    // add definitions for `title` and `content`
  

    const user = User.findOrCreate(
      {where: {name: req.body.name, email: req.body.email}
    }).spread((user, created) => {
      return Page.create(req.body).then((pageItem)=>{
        return pageItem.setAuthor(user)
      })
    }).then((pageInstance)=> {
      res.redirect(pageInstance.route);
    }).catch(next);
 

    // const page = Page.build({
    //   title: req.body.title,
    //   content: req.body.content,
    //   status: req.body.status,
    //   // author: user.id
    // });
  
    // STUDENT ASSIGNMENT:
    // make sure we only redirect *after* our save is complete!
    // note: `.save` returns a promise or it can take a callback.
    // user.save().then((user)=> console.log(user));
    
    // page.save().then((pageItem) =>{
    //     res.redirect(pageItem.route);
    // })
    // .catch(next);
   
    
  });




module.exports = wiki;
