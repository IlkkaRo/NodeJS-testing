'use strict';

const http      = require('http');
const path      = require('path');
const express   = require('express');
const app       = express();

const port      = 3000;
const host      = 'localhost';

const server    = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);

app.post('/persondata', express.urlencoded({extended:false}), (req,res)=> {
  if(!req.body) return res.sendStatus(400);
  res.render('result', {data:req.body, title:'Response',
    text:'Person data:', nameArray:['Luke', 'Leia', 'Obi-Wan', 'Darth']});
});

server.listen(port,host,()=>
/*eslint-disable no-console*/
  console.log(`Serving port ${port}`)
);
