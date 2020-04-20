First we do 
```
  npm init
```

Next we do the installation of the express package as shown .
```
  npm install --save express
```

Next we do the installation of the nodemon globally in the development mode it is required for the hot reloading 
```
  npm install -g nodemon
```

Here i have certain errors of EACCESS so i have followed the documentation state in the below url

[https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally]


next the app is made to start by using the app.js as the main file
```
  nodemon app.js
```

and then configured certain basic routes with the http verbs/actions by using the following code and making the code get initialized with the server being made to listen on the port 3000 .

```
    var express = require('express');
    var app = express();
    var port = process.env.port || 3000;
    app.listen(port);

    app.get('/',function(req,res){
    res.send("<html> <head><title> The Nodejs Title </title></head> <body><h1> Hello World</h1> </body></html>");  
    })

    app.get('/api',function(req,res){
    res.send(JSON.stringify({firstname: "mohan", lastname: "prathap"}))
    })
```


### dockerizing the application

------------------------------------------

  The application can be dockerized by using the following things .
  ```
    $ touch Dockerfile 
  ```

  The above command will try to create a file by name Dockerfile and the following instructions would be there in that file


  Dockerfile
  ```
    FROM node:10
    COPY *.json .
    COPY . .
    // create a file by name .dockerignore also in the same directory 
    // by doing the above thing what we are trying to do is the ignoring of the node_modules
    RUN npm install
    EXPOSE 8080
    //this is the exposing of the container port 8080 to the outer world
    CMD ["node", "app.js"]
    //the above command does the process of the running of the node app 
  ```

  .dockerigonre
  ```
    node_modules
    .gitignore
    README.md
  ```
------------------------------------------

Finally after doing all the above things we need to build the image out of the repository and this can be done by using the command below .
```
 $ docker run -p 49160:8080 -d <your username>/node-web-app
```



As we are exposing the container port at the port 8080 so thought of changing the container port of the image where the server is listening to also at the port 8080 .



# Next we will just check on the routing patterns that exist here

> Ref: [https://expressjs.com/en/guide/routing.html]
The site provides the reference for a better routing guide


# Static Files And the Middleware learnings
Middleware?
  - Something that sits between two layers of the request and the response being sent to the front end and then here the middleware helps in calculating the time taken for the request to get completed .

Ejs can be found at 
> ejs.com
```
  $ npm install ejs --save
```
Now after installing the ejs now we want to set the view engine 
```
$ app.set('view engine','ejs')
```