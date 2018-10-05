'use strict';

const http = require('http');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const server = http.createServer((request,response)=>{
  let url=require('url').parse(request.url,true);

  /*eslint-disable no-console*/
  console.log('query', url.query);
  console.log('name', url.query.name);
  /*eslint-enable no-console*/
  
  response.writeHead(200, {'content-type':'application/json'});
  response.end(JSON.stringify(url));
});

server.listen(port,host,()=>
  /*eslint-disable no-console*/
  console.log(`Server ${host} is listening port ${port}.`)
  /*eslint-enable no-console*/
);
