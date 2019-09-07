var express = require ('express'),
CodeBreaker = require('./code-breaker');

var app = express();

app.get('/setsecret/:secret', function(req, response){
    number = req.params.secret;
    CodeBreaker.setSecret(number);
    response.send({message: 'ok, let the game begins'})
});

app.get('/guess/:number', function(req, response){
    number = req.params.number;
    response.send({result: CodeBreaker.codeBreaker(number)})
})

app.get('/anything/:number', function(req, response){
    number = req.params.number;
    response.status(201).send(number);
})


app.get('/nothing/:number', function(req, response){
    number = req.params.number;
    response.status(400).send(number);
})

module.exports = app;