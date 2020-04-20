var express = require('express');
var app = express();
var port = process.env.port || 3000;
//we require the module using 
var bodyParser =  require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(port);

app.set('view engine','ejs')
app.use('/',function(req, res, next){
  console.log(req.params);
  console.log("entred the Middle ware");
  next();
})

app.get('/',function(req,res){
  console.log("rendering the middleware template");
  res.render('person',{ NAME: "chota bhai" })
})

app.get('/api',function(req,res){
  res.send(JSON.stringify({firstname: "mohan", lastname: "prathap"}))
})

app.get('/books/:id',function(req,res){
  res.send(`You have needed the book with the id of the ${req.params.id}`);
  console.log(req.params);
})


  // POST /login gets urlencoded bodies
  app.post('/person', urlencodedParser, function (req, res) {
      console.log(req.body);
    res.send('welcome, ' + req.body.fname)
  })