'use strict';

const http = require('http');
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const server = http.createServer((req, res)=>{
  res.writeHead(200, {'content-type':'text/html'});
  res.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>The need...for bathroom!</title>
      </head>
      <body>
        <h1>Hello bathroom my old friend!</h1>
      </body>
    </html>`);
  res.end();
});

server.listen(port, host, ()=>
  console.log(`Server ${host} is listening to port ${port}.`)
);
