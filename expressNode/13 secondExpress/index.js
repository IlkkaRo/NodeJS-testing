'use strict';

const path    = require('path');
const http    = require('http');

const express = require('express');
const app     = express();

const port    = process.env.PORT || 3000;
const host    = process.env.HOST || '127.0.0.1';

const server  = http.createServer(app);

app.get('/', (req, res) =>res.sendFile(path.join(__dirname, 'index.html')));

server.listen(port, host, ()=>
  /*eslint-disable no-console*/
  console.log(`Server ${host} serves ${port}`)
);
