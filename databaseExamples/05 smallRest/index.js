'use strict';

const http    = require('http');
const express = require('express');
const cors    = require('cors');
const path    = require('path');

const app     = express();
const server  = http.createServer(app);

const port    = process.env.PORT || 3000;
const host    = process.env.HOST || 'localhost';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'home.html'))
);

app.get('/json', (req, res) =>
  res.json({firstname:'Leia', lastname:'Organa'})
);

app.post('/json', (req, res) =>
  res.json({firstname:req.body.firstname, lastname:req.body.lastname})
);

server.listen(port, host, () =>
/*eslint-disable no-console*/
  console.log(`server ${host} at port ${port}`)
);
