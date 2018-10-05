'use strict';

const http      = require('http');
const path      = require('path');
const express   = require('express');

const app       = express();

const bodyParser  = require('body-parser');

const port      = 3000;
const host      = 'localhost';

const server    = http.createServer(app);

const urlencodedParser = bodyParser.urlencoded({extended:false});

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'index.html')));

app.post('/persondata', urlencodedParser,(req,res) => {
  if(!req.body) {
    return res.sendStatus(400);
  } else {
    res.writeHead(200, {'content-type':'text/html'});
    res.write(`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
            <title>Data sent</title>
        </head>
        <body>
          <h1>Your name</h1>`);
    res.write(`<p>${req.body.firstname} ${req.body.lastname}</p>`);
    res.end(`</body>
    </html>`);
  }
});

server.listen(port,host, () =>
/*eslint-disable no-console*/
  console.log(`Server serves ${port}`)
);
