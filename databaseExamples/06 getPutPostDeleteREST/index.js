'use strict';

const http     = require('http');
const path     = require('path');
const cors     = require('cors');
const express  = require('express');
const app      = express();

const server   = http.createServer(app);
const port     = process.env.PORT || 3000;
const host     = process.env.HOST || 'localhost';

const datastorage = {};

app.use(cors());
app.use(express.json());

app.get('/', (req,res) =>
  res.sendFile(path.join(__dirname, 'home.html')));

app.get('/resources', (req,res) => res.json(datastorage));

app.route('/resources/:number')
  .get((req,res) => res.json(datastorage[req.params.number]))
  .post((req,res) => doPost(req,res))
  .put((req,res) => doPut(req,res))
  .delete((req,res) => doDelete(req,res));

/*eslint-disable no-console*/
server.listen(port,host, () => console.log(`Host: ${host}, Port: ${port}`));
/*eslint-enable no-console*/

function doPost(req,res) {
  if(!datastorage[req.params.number]) {
    doPut(req,res);
  } else {
    Object.assign(datastorage[req.params.number], req.body);
    res.end();
  }
}

function doPut(req,res) {
  datastorage[req.params.number] = req.body;
  res.end();
}

function doDelete(req,res) {
  delete datastorage[req.params.number];
  res.end();
}
