'use strict';

const http = require('http');
const path = require('path');
const url = require('url');

const port = 3000;
const host = 'localhost';

const {sendFile, readJson} = require(path.join(__dirname, 'libraries', 'filehandler.js'));

const dataStoragePath = path.join(__dirname, 'data', 'datastorage.json');

const server = http.createServer((req,res)=> {
  let urlObject = url.parse(req.url);
  let route = urlObject.pathname;
  if(route==='/') {
    send(res);
  }
  else if(route.startsWith('/images')){
    sendFile(res,path.join(__dirname,route),{type:'image/png', encoding:'binary'});
  }
  else {
    res.end();
  }
});

server.listen(port,host,()=>
console.log(`Server is running on port ${port}`)
);

function send(res) {
  readJson(dataStoragePath)
    .then(data=>JSON.parse(data))
    .then(dudes=>createDudeRows(dudes)) //persons??
    .then(rows =>{
      res.writeHead(200,{'content-type':'text/html'});
      res.write(`<!DOCTYPE html>
      <html lang="en" dir="ltr">
        <head>
          <meta charset="utf-8">
          <title></title>
        </head>
        <body>
          <h1>The greatest programmers of our time</h1>
          ${rows}
        </body>
      </html>`);
    })
    .catch(err=>{
      res.setStatusCode=404;
      res.end(err.message);
    });
}

function createDudeRows(dudes) {
  let rows = '';
  for(let dude of dudes) {
    let dudeData='';
    let nameData=dude.firstName+' '+dude.lastName;

    if(dude.yearOfBirth) {
      dudeData+='('+dude.yearOfBirth;
    }
    if(dude.yearOfDeath) {
      dudeData+=' - '+dude.yearOfDeath;
    }
    if(dude.yearOfBirth || dude.yearOfDeath) {
      dudeData+=')';
    }
    rows+=`<section>
    <h2>${nameData}</h2>`;
    if(dude.photo) {
      rows+=`<img src=/images/${dude.photo}
        alt="portrait of ${nameData}">`;
    }
    else {
      rows+='<p>No portrait available</p>';
    }
    rows+=`<p>${dudeData}</p>`;
    rows+='</section>';
  }
  return rows;
}
