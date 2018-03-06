const express = require( 'express' );
const app = express(); // creates an instance of an express application
const vball = require('volleyball');
const nunjucks= require('nunjucks');

app.use(vball);
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.render('index.html', locals,  function(err, output){
    console.log(output);
});


app.use(function(req, res, next){
    console.log(req.method + " " + req.path);
    next();
});

app.get('/', function(req, res){
    res.send('<h1>What on earth am I doing?</h1><p>I don\'t think I\'ll ever understand...<p>');
})

app.listen(3000, function(){
    
})