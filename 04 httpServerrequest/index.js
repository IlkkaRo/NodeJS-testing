'use strict';

const http = require('http');
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const server = http.createServer((req, res)=>{
  let url=(require('url').parse(req.url)); //to make pathname work, could be a const
  res.writeHead(200, {'content-type':'text/html'});
  res.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New title, new things.</title>
      </head>
      <body>
        <h1>Request info</h1>
        <h2>Headers: ${JSON.stringify(req.headers)}</h2>
        <h2>host: ${req.headers.host}</h2>
        <h2>host: ${req.headers['host']}</h2>
        <h2>url: ${req.url}</h2>
        <h2>method: ${req.method}</h2>
        <h2>pathname: ${url.pathname}</h2>
      </body>
    </html>`);
  res.end();
});
//localhost:3000/testitesti or localhost:3000
server.listen(port, host, ()=>
  console.log(`Server ${host} is listening to port ${port}.`)
);