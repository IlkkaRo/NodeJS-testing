'use strict';

const http      = require('http');
const path      = require('path');
const express   = require('express');
const app       = express();

const port      = 3000;
const host      = 'localhost';

const users   = require(path.join(__dirname, 'users.json'));

const server    = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'login'));

app.get('/', (req,res) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);

app.post('/persondata', express.urlencoded({extended:false}), (req,res)=> {
  // if(!req.body) return res.sendStatus(400);
  if(Object.keys(users).includes(req.body.username) &&
  users[req.body.username]===req.body.password) {
    res.render('login', {text:'You got in, have a good time!'});
  } else {
    res.render('login', {text:'Dumbass! How can you not remember your password???'});
  }
});

server.listen(port,host,()=>
/*eslint-disable no-console*/
  console.log(`Serving port ${port}`)
);
