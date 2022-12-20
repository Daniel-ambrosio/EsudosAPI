var express = require('express');
const fetch = require("node-fetch");
var app = express();
var flamengo = ["gabigol","pedro"];
var names = ["vanderlei", "viviane", "Daniel", "Yasmim", "Lucas"]


app.get('/', async function(req, res) {
  const conselhos ="https://api.adviceslip.com/advice";
  const response = await fetch(conselhos);
  const responseJson = await response.json();
  console.log(responseJson);
  res.send(responseJson.slip.advice);
});

app.get('/flamengo', function(req,res) {  
    res.send(flamengo)  
})

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});
