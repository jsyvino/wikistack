const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.get('/', function(req, res){
    res.send('<h1>What on earth am I doing?</h1><p>I don\'t think I\'ll ever understand...<p>');
})

app.listen(3000, function(){
    console.log("The server is listening, I TELL YOU");
})