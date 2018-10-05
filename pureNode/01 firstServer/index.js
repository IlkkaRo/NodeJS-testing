'use strict';

const http = require('http');
const port = process.env.PORT || 3000;
const host = process.env.HOST || '127.0.0.1';

const server = http.createServer((request, response)=>{ //req , res
  response.writeHead(200, {'content-type':'text/plain; charset=utf-8'});
  response.write('Node prkl, this is it! ');
  response.end('Pro koodarit työssään...');
});

server.listen(port, host, ()=>
  console.log(`Server ${host} is listening at port ${port}.`)
);
// node index in terminal
