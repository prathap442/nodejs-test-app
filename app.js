var express = require('express');
var app = express();
var port = process.env.port || 3000;
app.listen(port);

app.get

app.get('/',function(req,res){
  res.send("<html> <head><title> The Nodejs Title </title></head> <body><h1> Hello World</h1> </body></html>");  
})

app.get('/api',function(req,res){
  res.send(JSON.stringify({firstname: "mohan", lastname: "prathap"}))
})

app.get('/books/:id',function(req,res){
  res.send(`You have needed the book with the id of the ${req.params.id}`);
  console.log(req.params);
})