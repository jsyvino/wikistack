'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const models = require('./models');
//const makesRouter = require('./routes');
//const fs = require('fs');
const bodyParser = require('body-parser');
const env = nunjucks.configure('views', { noCache: true }); // where to find the views, caching off
const route = require('./routes/index.js');

var urlFunc = function(str){
    if(!str){
      console.log(str);
       return "New_Page"+Math.floor(Math.random()*100);
    } else return output= str.replace(/[\W]+/g, "_").trim();
  };

app.set('view engine', 'html'); // what file extension do our templates have
app.engine('html', nunjucks.render); // how to render html templates

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests
app.use(express.static('./public'));

app.use('/', route);











models.db.sync()//({force: true})
.then(function () {
    console.log('All tables created!');
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error.bind(console));
  