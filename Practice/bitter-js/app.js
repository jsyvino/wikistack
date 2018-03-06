const express = require( 'express' );
const app = express(); // creates an instance of an express application
const vball = require('volleyball');

app.use(vball);

app.use(function(req, res, next){
    console.log(req.method + " " + req.path);
    next();
});

app.get('/', function(req, res){
    res.send('<h1>What on earth am I doing?</h1><p>I don\'t think I\'ll ever understand...<p>');
})

app.listen(3000, function(){
    
})